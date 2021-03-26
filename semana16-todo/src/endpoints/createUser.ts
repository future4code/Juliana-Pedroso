import { Request, Response } from "express";
import connection from "../connection";

const createUser = async (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    await connection.raw(
      `INSERT INTO User (id, name, nickname, email)
            VALUES (
                ${req.body.id},
                "${req.body.name}",
                "${req.body.nickname}",
                "${req.body.email}"
            );`
    );

    if (!req.body.id || !req.body.name || !req.body.nickname || !req.body.email) {
        errorCode = 402;
        throw new Error("Please check the fields.");
      }

    res.status(201).send({ message: "User created successfully!" });

  } catch (error) {
    console.log(error.message);
    res.status(errorCode).send({ message: error.message });
  }

  //   if (!reqBody.id || !reqBody.name || !reqBody.nickname || !reqBody.email) {
  //     errorCode = 402;
  //     throw new Error("Please check the fields.")
  //   }
};

export default createUser;
