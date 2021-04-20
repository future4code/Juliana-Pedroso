import { Request, Response } from "express";
import connection from "../connection";
import generateId from "../services/idGenarator";
import { generateToken } from "../services/authenticator";
import { user, userRole } from "../types";
import { hash } from "../services/hashManager";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {

  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      res.statusCode = 422;
      throw new Error("Please check the fields");
    }

    if (email.indexOf("@") === -1) {
        res.statusCode = 400;
      throw new Error("Invalid email");
    }

    if (password.length < 6) {
        res.statusCode = 400;
      throw new Error("Password must be at least 6 characters");
    }

    const [user] = await connection("cookenu_users")
        .where({ email });

    if (user) {
      res.statusCode = 409;
      throw new Error("Email already registered");
    }

    if (
      role.toUpperCase() !== userRole.ADMIN &&
      role.toUpperCase() !== userRole.NORMAL
    ) {
      res.statusCode = 422;
      throw new Error("Options are 'NORMAL' or 'ADMIN'");
    }

    const id: string = generateId();

    const cypherText = await hash(password);

    const newUser: user = { id, name, email, password: cypherText, role };

    await connection("cookenu_users")
        .insert(newUser);

    const token: string = generateToken({ id, role });

    res.status(201).send({ token });

  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.message })
    } else {
      res.send({ message: error.message });
    }
  }
}
