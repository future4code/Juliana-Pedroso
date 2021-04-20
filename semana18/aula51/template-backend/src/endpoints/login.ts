import { Request, Response } from "express"
import connection from "../connection"
import { generateToken } from "../services/authenticator"

export default async function login(
   req: Request,
   res: Response
): Promise<void> {
   try {
      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
  
      const userData = {
        email: req.body.email,
        password: req.body.password,
      };
  
      const user = await getUserByEmail(userData.email);
  
      const comapreResult = await compare(
        userData.password,
        user.password
      );
  
      if (!compareResult) {
        throw new Error("Invalid password");
      }
  
      const token = generateToken({
        id: user.id    
        });
  
      res.status(200).send({
        token,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });