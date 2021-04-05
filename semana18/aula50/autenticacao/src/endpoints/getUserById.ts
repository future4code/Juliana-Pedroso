import { Request, Response } from "express";
import connection from "../connection";

const getUserById = async (req: Request, res: Response): Promise<any> => {

  try {
    const id = req.params.id;

    if (!id) {
      throw new Error("Please send a valid id");
    }

    const result = await connection.raw(`
          SELECT id, email, password
          FROM aula50_users
          WHERE id = "${id}"
          `);

    if (!result[0].length) {
      throw new Error("ID not found");
    }

    res.status(200).send(result[0]);
    
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

export default getUserById;
