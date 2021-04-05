import { Request, Response } from "express";
import connection from "../connection";

const getUserByEmail = async (req: Request, res: Response): Promise<any> => {

  try {
    const email = req.query.email;

    if (!email) {
      throw new Error("Please send a valid email");
    }

    const result = await connection.raw(`
          SELECT id, email, password
          FROM aula50_users
          WHERE email like "%${email}%"
          `);

    if (!result[0].length) {
      throw new Error("E-mail not found");
    }

    res.status(200).send(result[0]);
    
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

export default getUserByEmail;
