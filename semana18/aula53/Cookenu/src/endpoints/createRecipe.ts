import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../types";

export default async function createRecipe(
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

    const { title, description } = req.body;

    if (!title || !description) {
      res.statusCode = 422;
      throw new Error("Please check the fields");
    }

    const dateTime = Date.now();

    const date = new Date(dateTime);

    const recipe = {
      title,
      description,
      created_date: `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`,
      user_id: tokenData.id,
    };

    await connection("cookenu_recipes")
      .insert(recipe);

    res.status(201).send("Recipe successfully created!");

  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.message });
    } else {
      res.send({ message: error.message });
    }
  }
};
