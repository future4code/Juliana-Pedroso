import * as jwt from "jsonwebtoken"
import { authenticationData } from "../types"
import dotenv from "dotenv"

dotenv.config()

export const generateToken = (
   payload: authenticationData
): string => {
   return jwt.sign(
      payload,
      process.env.JWT_KEY!,
      { expiresIn: "24d" }
   )
}

export const getTokenData = (
   token: string
): authenticationData | null => {
   try {

      const { id, email, role } = jwt.verify(token, process.env.JWT_KEY!) as authenticationData

      return { id, email, role }

   } catch (error) {
      
      console.log(error.message);
      return null
   }
}

