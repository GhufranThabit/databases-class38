import { accountsCollection } from "./index.js";

export const cleanUpAccounts = async function cleanUp() {
  const cleanUpAccounts = await accountsCollection.deleteMany({});
  console.log(`${cleanUpAccounts.deletedCount} accounts has been deleted `);
};

export const createAccountDocument = async function create(
  account_number,
  balance
) {
  const account = {
    account_number: account_number,
    balance: balance,
    account_changes: [],
  };

  const insert = await accountsCollection.insertOne(account);
  console.log(
    `we have inserted the account with this Id:${insert.insertedId} `
  );
};
