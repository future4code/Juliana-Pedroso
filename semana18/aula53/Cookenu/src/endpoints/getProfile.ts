import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData, userPersonalInfo, userRole } from "../types";

export default async function getProfile(
  req: Request,
  res: Response
): Promise<void> {

  try {
    let errorCode: number = 404;

    const token: string = req.headers.authorization!;

    const tokenData: authenticationData | null = getTokenData(token);

    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("Unatuthorized");
    }

    const result = await connection("cookenu_users")
      .select("name", "email")
      .where({ id: tokenData.id });

    if (result[0].length === 0) {
      errorCode = 404;
      throw new Error("User not found");
    }

    res.status(200).send({ user: result[0] });

  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.message });
    }

    res.send({ message: error.message });
  }
}
