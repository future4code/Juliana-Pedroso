import { hash } from "bcryptjs";
import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import generateId from "../services/generateId";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
    try {
        const userData = {
          email: req.body.email,
          password: req.body.password
        };
      
        const id = generateId();
    
        const hashPassword = await hash(userData.password);
    
        await createUser(id, userData.email, hashPassword);
    
        const token = generateToken({
          id
        });
    
        res.status(200).send({
          token,
        });
      } catch (err) {
        res.status(400).send({
          message: err.message,
        });
      }
    };