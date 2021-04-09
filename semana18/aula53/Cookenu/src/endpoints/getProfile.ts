import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData, userPersonalInfo, userRole } from "../types";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
    
  try {

    const token: string = req.headers.authorization!;

    const userId = req.params.id;

    const tokenData: authenticationData | null = getTokenData(token);

    // if (!tokenData) {
    //   res.statusCode = 401;
    //   throw new Error("Unatuthorized");
    // }

    await connection
      .select("*")
      .from("cookenu_users")
      .where({ id: tokenData.id });

      res.status(200).send({
        id: tokenData.id
    })

  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.message });
    }

    res.send({ message: error.message });
  }
}
