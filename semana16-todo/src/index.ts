import app from "./app";
import createUser from "./endpoints/createUser";
import getUserById from "./endpoints/getUserById";

app.put("/user", createUser);

app.get("/user/:id", getUserById);
