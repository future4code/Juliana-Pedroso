import app from "./app";
import createUser from "./endpoints/createUser";
import getUserByEmail from "./endpoints/getUserByEmail";
import login from "./endpoints/login";

app.post("/user/signup", createUser);

app.post("/user/login", login);

app.get("/user/email", getUserByEmail);


