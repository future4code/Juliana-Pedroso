import app from "./app";
import createUser from "./endpoints/createUser";
import login from "./endpoints/login";
import createRecipe from "./endpoints/createRecipe";
import getProfile from "./endpoints/getProfile";
import getRecipe from "./endpoints/getRecipe";
// import getAddressInfo from "./services/getAddressInfo";
// import resetPassword from "./endpoints/resetPassword";

app.post("/user/signup", createUser);

app.post("/user/login", login);

app.post("/recipe", createRecipe);

app.get("/user/profile", getProfile);

app.get("/recepie", getRecipe);

// app.put('/user/edit',);

// app.post('/user/password/reset',);
