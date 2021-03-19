import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();

app.use(express.json());
app.use(cors());

type user = {
  CPF: number;
  nome: string;
  dataNascimento: string;
};

let users: user[] = [
  {
    CPF: 12345678900,
    nome: "Astrodev",
    dataNascimento: "21/03/2019",
  },
];

app.get("/users", (req: Request, res: Response) => {
  let errorCode: number = 404;
  
  const nome: string = req.query.nome as string;
  const myUsers = users;
  const myUser = myUsers.find((user) => {
      return user.nome === nome;
  })

  if (!myUsers) {
      errorCode = 404;
      throw new Error("User not found")
  }

  res.status(200).send({myUser})

  try {
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

import { AddressInfo } from "net";

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
