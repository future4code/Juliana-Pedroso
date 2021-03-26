import app from "./app";
import createUser from "./endpoints/createUser";
import getUser from "./endpoints/getUser";

app.put("/user", createUser);

app.get("/user:id", getUser)
