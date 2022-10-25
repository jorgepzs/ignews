import { MongoClient } from "mongodb";

export async function getClient() {
  let client = new MongoClient(process.env.MONGODB_KEY);

  await client.connect();

  return client;
}
