import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../types";

export default async function getProfileById(
  req: Request,
  res: Response
): Promise<void> {

  try {
    const id: string = req.params.id;

    const token: string = req.headers.authorization!;

    const tokenData: authenticationData | null = getTokenData(token);

    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("Unatuthorized");
    }

    if (!id) {
      res.statusCode = 401;
      throw new Error("Necessary to inform id in url");
    }

    const user = await connection("cookenu_users")
      .select("id", "name", "email")
      .where("id", id);

    res.status(200).send(user[0]);

  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.message });
    } else {
      res.send({ message: error.message });
    }
  }
}
