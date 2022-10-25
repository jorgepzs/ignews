import { getClient } from "../../../services/mongo";

const handler = async (req, res) => {
  try {
    if (req.method !== "POST") {
      return res.status(405).end();
    }
    const mongo = await getClient();
    const { clientEmail, clientUsername, clientPassword } = req.body;

    if (!req.body) return res.status(400).send({ message: "Bad Request" });

    const checkEmailExists = await mongo
      .db()
      .collection("users")
      .findOne({ email: clientEmail });
    if (checkEmailExists)
      return res.status(400).send({ message: "Email Alredy in use" });

    const checkUsernamelExists = await mongo
      .db()
      .collection("users")
      .findOne({ username: clientUsername });
    if (checkUsernamelExists)
      return res.status(400).send({ message: "Username Alredy in use" });

    const data = {
      email: clientEmail,
      username: clientUsername,
      password: clientPassword,
      createdAT: new Date(),
      updatedAt: new Date(),
    };

    const user = await mongo.db().collection("users").insertOne(data);

    if (!user.insertedId) {
      return res.status(422).send({
        status: 422,
        message: "user not registred",
        data: null,
      });
    }

    return res.status(201).send({
      ...user,
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
