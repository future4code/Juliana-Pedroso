import { Request, Response } from "express";
import connection from "../connection";
import generateToken from "../services/authenticator";

const login = async (req: Request, res: Response): Promise<void> => {

  try {
    const { email, password } = req.body;

    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const [user] = await connection("aula50_users")
    .where({ email });

    if (!user || user.password !== password) {
      res.statusCode = 401;
      throw new Error("Invalid password");
    }

    const token: string = generateToken({ id: user.id });

    res.send({ token });

  } catch (error) {

    if (res.statusCode == 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.send({ message: error.message });
    }
  }
};

export default login;
