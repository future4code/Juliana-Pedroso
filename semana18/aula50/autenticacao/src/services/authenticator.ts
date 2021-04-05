import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types";
import dotenv from "dotenv";

dotenv.config();

// primeiro jeito de fazer:
// const myToken = jwt.sign(
//   {
//     name: "Teste",
//     id: "123456",
//   },
//   "hytrfsg66664321hrteksoelsjsuppf",
//   {
//     expiresIn: "24h",
//   }
// );

// --------------------------------

// segundo jeito e recomendado:
const generateToken = (payload: authenticationData): string => {
  return jwt.sign(payload, String(process.env.JWT_KEY), { expiresIn: "24h" });
};

export default generateToken;

export const getTokenData = (
    token: string): authenticationData | null => {
        
  try {

    const { id } = jwt.verify(
      token,
      process.env.JWT_KEY!
    ) as authenticationData;

    return { id };

  } catch (error) {
    console.log(error.message);
    return null;
  }
};

// verifica os dados do token, como name, id, tempo de experação, etc no primeiro jeito de fazer:
// console.log(jwt.verify(myToken, "hytrfsg66664321hrteksoelsjsuppf"));
