import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../types";

export default async function getRecipeById (
  req: Request,
  res: Response
): Promise<void> {

  try {
    let errorCode: number = 404;

    const id: string = req.params.id;

    const token: string = req.headers.authorization!;

    const tokenData: authenticationData | null = getTokenData(token);

    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("Unatuthorized");
    }

    if (!id) {
      res.statusCode = 401;
      throw new Error("Envie o ID via URL recipe/:id");
    }
    const result = await connection("cookenu_recipes")
      .select("id", "title", "description", "created_date")
      .where("id", id);

    if (result[0].length === 0) {
      errorCode = 404;
      throw new Error("Recipe not found");
    }

    res.status(200).send(result[0]);
    
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.message });
    }

    res.send({ message: error.message });
  }
};
