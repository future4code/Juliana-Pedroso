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

      const { email, password } = req.body

      if (!email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'email' e 'password'")
      }

      const [user] = await connection('aula50_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
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