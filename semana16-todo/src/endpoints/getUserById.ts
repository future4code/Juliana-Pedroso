import { Request, Response } from "express";
import connection from "../connection";
import { selectUserById } from "../data/selectUserById";

const getUserById = async (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {

    const id = Number(req.params.id)

    const result = await selectUserById(id)

    if (!result) {
      errorCode = 404
      throw new Error("User not found")
    } else {
      res.status(200).send(result)
    }

  } catch (error) {
    console.log(error.message);
    res.status(errorCode).send("User not found");
  }
};

export default getUserById;
