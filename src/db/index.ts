import * as mongoDB from "mongodb";

export const collections: {
  users?: mongoDB.Collection;
} = {};

export const connectToDatabase = async () => {
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    "mongodb://localhost:27017"
  );

  await client.connect();

  const db: mongoDB.Db = client.db("disporaMakassar");

  //Collention Untuk MongoDb
  const memberCollection: mongoDB.Collection = db.collection("users");
  collections.users = memberCollection;

  //

  console.log(`Successfully connected to database: ${db.databaseName}`);
};
