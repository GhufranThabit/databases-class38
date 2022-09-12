import { accountsCollection } from "./index.js";

export async function transferCredits(
  client,
  fromAccountNo,
  toAccountNo,
  amount,
  remark
) {
  const session = client.startSession();

  const transactionOptions = {
    readPreference: "primary",
    readConcern: { level: "local" },
    writeConcern: { w: "majority" },
  };
  try {
    await session.withTransaction(async () => {
      console.log(" Start the transaction.");
      //   Remove from account

      const newNumber = await changedAccountsNo(
        toAccountNo,
        accountsCollection
      );

      await accountsCollection.updateOne(
        { account_number: fromAccountNo },
        {
          $inc: { balance: amount * -1 },
          $addToSet: {
            account_changes: {
              change_number: newNumber,
              amount: amount * -1,
              change_date: new Date(),
              remark: remark,
            },
          },
        },
        { session }
      );

      //   Add to account

      await accountsCollection.updateOne(
        { account_number: toAccountNo },
        {
          $inc: { balance: amount },
          $addToSet: {
            account_changes: {
              change_number: newNumber,
              amount: amount,
              change_date: new Date(),
              remark: remark,
            },
          },
        },
        { session }
      );
      console.log(`The transaction was successful`);
      transactionOptions;
    });
  } catch (err) {
    // await session.abortTransaction();
    console.log(
      `The transaction was aborted due to an unexpected error:${err}`
    );
  } finally {
    await session.endSession();
  }
}

const changedAccountsNo = async function makeChanges(
  account_number,
  accountsCollection
) {
  const account = await accountsCollection.findOne({
    account_number: account_number,
  });

  const AccountChange = account.account_changes.length + 1;
  return AccountChange;
};
