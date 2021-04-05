import { Request, Response } from "express";
import connection from "../connection";
import generateId from "../services/idGenerator";
import { user } from "../types";
import generateToken from "../services/authenticator"

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

   // validação do email
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    // validação da senha
    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }

      const { email, password } = req.body

      const [user] = await connection('aula50_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('E-mail already registered')
      }

      // cria o id:
      const id: string = generateId()

      const newUser: user = { id, email, password }

      await connection('aula50_users')
         .insert(newUser)

      // cria o token com o caminho signup:
      const token: string = generateToken({ id })
      // ----------------

      res.status(201).send({ newUser, token })

   } catch (error) {
      console.log(error)

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}