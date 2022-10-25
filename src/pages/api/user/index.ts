import { COLLECTIONS } from "../../../../constants";
import { getClient } from "../../../services/mongo";

const handler = async (req, res) => {
  try {
    if (req.method !== "GET") {
      return res.status(405).end();
    }

    const mongo = await getClient();

    const users = await mongo.db().collection("users").find({}).toArray();

    return users
      ? res.status(200).send(users)
      : res.status(500).send({
          status: 500,
          message: "Internal Server Erro",
          data: null,
        });
  } catch (error) {
    if (error instanceof Error) {
      return res
        .status(500)
        .send({ status: 500, message: error.message, data: null });
    }
  }
};

export default handler;
