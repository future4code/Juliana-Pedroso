import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const expiresIn = "1min";
const generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }

type AuthenticationData = {
  id: string;
}

export default generateToken;

// export const getTokenData = (
//     token: string): authenticationData | null => {
        
//   try {

//     const { id } = jwt.verify(
//       token,
//       process.env.JWT_KEY!
//     ) as authenticationData;

//     return { id };

//   } catch (error) {
//     console.log(error.message);
//     return null;
//   }
// };
