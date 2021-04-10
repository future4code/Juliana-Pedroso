import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../types";

export default async function getFeed(
  req: Request,
  res: Response
): Promise<void> {

  try {
    const token: string = req.headers.authorization!;
    
    const tokenData: authenticationData | null = getTokenData(token);

    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("Unatuthorized");
    }

    const result = await connection.raw(`
    SELECT recipes.id, title, description, created_date, users.id, users.name
    FROM cookenu_recipes as recipes
    JOIN cookenu_users as users
    ON users.id = recipes.user_id
    `);

    res.status(200).send({ recipes: result[0] });

  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.message });
    } else {
      res.send({ message: error.message });
    }
  }
}
