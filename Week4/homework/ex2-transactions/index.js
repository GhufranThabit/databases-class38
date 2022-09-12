import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { transferCredits } from "./transfer.js";
import { createAccountDocument, cleanUpAccounts } from "./setup.js";
dotenv.config();

const uri = process.env.MONGODB_URL;

const client = new MongoClient(uri);

// export const session = client.startSession();

export const accountsCollection = client
  .db("databaseweek4")
  .collection("Accounts");

async function main() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    await cleanUpAccounts();
    await createAccountDocument(101, 3000);
    await createAccountDocument(102, 1000);
    await transferCredits(client, 101, 102, 1000, "transfer from 101 to 102");
  } finally {
    await client.close();
  }
}

main().catch(console.error);
