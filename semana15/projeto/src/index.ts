import { AddressInfo } from "net";
import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();

app.use(express.json());
app.use(cors());

type user = {
  cpf: number;
  name: string;
  birthDate: string;
  balance: number;
  transactions: [];
};

let users: user[] = [
  {
    cpf: 12345678900,
    name: "Astrodev",
    birthDate: "21/03/2019",
    balance: 0,
    transactions: [],
  },
  {
    cpf: 34123578611,
    name: "Labenu",
    birthDate: "01/03/2019",
    balance: 0,
    transactions: [],
  },
];

type transaction = {
  value: number;
  date: string;
  description: string;
};

let transactions: transaction[] = [
  {
    value: 10,
    date: "18/08/2019",
    description: "compra de um sorvetin",
  },
];

// requisição para mostrar usuário por query ?name=
app.get("/users", (req: Request, res: Response) => {
  let errorCode: number = 404;

  const name: string = req.query.name as string;
  const myUsers = users;
  const myUser = myUsers.find((user) => {
    return user.name === name;
  });

  if (!myUsers) {
    errorCode = 404;
    throw new Error("User not found");
  }

  res.status(200).send({ myUser });

  try {
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

// requisição para mostrar todos os usuários:
app.get("/users/all", (req: Request, res: Response) => {
  res.send(users);
});

// requisição para mostrar usuário por id com parms:
app.get("/users/:cpf", (req: Request, res: Response) => {
  let errorCode: number = 400;

  const cpf: number = Number(req.params.cpf);
  if (isNaN(cpf)) {
    errorCode = 422;
    throw new Error("Invalid value for id. Please send a number!");
  }
  const myUsers = users;
  const myUser = myUsers.find((user) => {
    return user.cpf === cpf;
  });

  if (!myUser) {
    errorCode = 404;
    throw new Error("User not found :(");
  }

  res.status(200).send({ myUser });

  try {
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

// requisição para criar novo usuário:
app.post("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    // const {cpf, name, birthDate, balance, transactions} = req.body
    const reqBody: user = {
      cpf: req.body.cpf,
      name: req.body.name,
      birthDate: req.body.birthDate,
      balance: req.body.balance,
      transactions: req.body.transactions,
    };

    Number(reqBody.birthDate);

    let event = new Date(req.body.birthDate);
    let ageInMilisseconds = Date.now() -event.getTime();
    let ageinYears = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365;

    if (ageinYears < 18) {
      errorCode = 401;
      throw new Error("Unauthorized age");
    }

    if (
      !reqBody.cpf ||
      !reqBody.name ||
      !reqBody.birthDate ||
      reqBody.balance < 0 ||
      !reqBody.transactions
    ) {
      errorCode = 422;
      throw new Error("Please check the fields");
    }

    users.push(reqBody);
    // status 201 is created
    res.status(201).send({ message: "User created succesfully!" });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

// rodar no servidor:
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
