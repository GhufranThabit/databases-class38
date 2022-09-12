import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGODB_URL;

const client = new MongoClient(uri);

async function main() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    await printTotalPopulation(client, "Netherlands");
    await printAllPopulationBYAgeYear(client, 2020, "100+");
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

main().catch(console.error);

async function printTotalPopulation(client, Country) {
  const totalPopulation = [
    { $match: { Country: Country } },
    {
      $group: {
        _id: "$Year",
        countPopulation: { $sum: { $sum: ["$M", "$F"] } },
      },
    },
    { $sort: { Year: 1 } },
  ];

  const aggCursor = client
    .db("databaseweek4")
    .collection("population")
    .aggregate(totalPopulation);

  const results = await aggCursor.toArray();

  await results.forEach((result) => {
    console.log(result);
  });
}

async function printAllPopulationBYAgeYear(client, Year, Age) {
  const PopulationBYAgeYear = [
    {
      $match: {
        Year: Year,
        Age: Age,
        Country: {
          $in: [
            "AFRICA",
            "ASIA",
            "EUROPE",
            "LATIN AMERICA AND THE CARIBBEAN",
            "NORTHERN AMERICA",
            "OCEANIA",
          ],
        },
      },
    },
    { $addFields: { TotalPopulation: { $add: ["$M", "$F"] } } },
  ];

  const aggCursor = client
    .db("databaseweek4")
    .collection("population")
    .aggregate(PopulationBYAgeYear);

  const results = await aggCursor.toArray();

  await results.forEach((result) => {
    console.log(result);
  });
}
