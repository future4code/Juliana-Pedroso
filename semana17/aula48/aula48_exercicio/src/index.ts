import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { user } from "./types/user";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get(
  "/users/all",
  async function (req: Request, res: Response): Promise<void> {
    try {
      const users: user[] = await connection.raw(`
         SELECT id, name, email, type
         FROM aula48_exercicio
      `);

      if (!users.length) {
        res.statusCode = 404;
        throw new Error("User not found");
      }

      res.status(200).send(users);
    } catch (error) {
      console.log(error);
      res.send(error.message || error.sqlMessage);
    }
  }
);

app.get("/users/search/name", async (req: Request, res: Response) => {
  try {
    const name = req.query.name;

    if (!name) {
      throw new Error("Please send a valid name");
    }

    const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      WHERE aula48_exercicio.name like "%${name}%"
      `);

    if (!result[0].length) {
      throw new Error("User not found");
    }

    res.status(200).send(result[0]);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.get("/users/search/type", async (req: Request, res: Response) => {
  try {
    const type = req.query.type;

    if (!type) {
      throw new Error("Please send a valid type");
    }

    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       WHERE aula48_exercicio.type like "%${type}%"
       `);

    if (!result[0].length) {
      throw new Error("Type not found");
    }

    res.status(200).send(result[0]);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.get("/users/search", async (req: Request, res: Response) => {
  try {
    const name = req.query.name;
    let orderBy = req.query.orderBy as string;
    let orderType = req.query.orderType as string;

    if (!name) {
      throw new Error("Please send a valid name");
    }

    if (orderBy !== "name" && orderBy !== "type") {
      orderBy = "email";
    }

    if (
      orderType.toUpperCase() !== "ASC" &&
      orderType.toUpperCase() !== "DESC"
    ) {
      orderType = "ASC";
    }

    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       WHERE aula48_exercicio.name like "%${name}%"
       ORDER BY ${orderBy} ${orderType};
       `);

    if (!result[0].length) {
      throw new Error("User not found");
    }

    res.status(200).send(result[0]);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.get("/users/search/order", async (req: Request, res: Response) => {

  try {

    const name = req.query.name
    let orderBy = req.query.orderBy as string
    let orderType = req.query.orderType as string
    let page = req.query.page

    if (!name) {
      throw new Error("Please send a valid name");
    }

    if (orderBy !== "name" && orderBy !== "type") {
      orderBy = "email";
    }

    if (
      orderType.toUpperCase() !== "ASC" &&
      orderType.toUpperCase() !== "DESC"
    ) {
      orderType = "ASC";
    }

    if (isNaN(Number(page)) || Number(page) < 1) {
        page = "1"
    }

    const limit = 5
    const offset = limit * (Number(page) - 1)

    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       WHERE aula48_exercicio.name like "%${name}%"
       ORDER BY ${orderBy} ${orderType}
       LIMIT ${limit}
       OFFSET ${offset};
       `);

    if (!result[0].length) {
      throw new Error("User not found");
    }

    res.status(200).send(result[0]);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.get("/users/search/all", async (req: Request, res: Response) => {

    try {
  
      const name = req.query.name
      const type = req.query.type
      let orderBy = req.query.orderBy as string
      let orderType = req.query.orderType as string
      let page = req.query.page
  
      if (orderBy !== "name" && orderBy !== "type") {
        orderBy = "name";
      }
  
      if (
        orderType.toUpperCase() !== "ASC" &&
        orderType.toUpperCase() !== "DESC"
      ) {
        orderType = "DESC";
      }
  
      if (isNaN(Number(page)) || Number(page) < 1) {
          page = "1"
      }
  
      const limit = 5
      const offset = limit * (Number(page) - 1)
  
      const result = await connection.raw(`
         SELECT id, name, email, type
         FROM aula48_exercicio
         WHERE aula48_exercicio.name like "%${name}%" 
         OR aula48_exercicio.type like "%${type}%"
         ORDER BY ${orderBy} ${orderType}
         LIMIT ${limit}
         OFFSET ${offset};
         `);
  
      if (!result[0].length) {
        throw new Error("User not found");
      }
  
      res.status(200).send(result[0]);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
