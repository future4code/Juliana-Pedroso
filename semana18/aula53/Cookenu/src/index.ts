import app from "./app";
import createUser from "./endpoints/createUser";
import login from "./endpoints/login";
import createRecipe from "./endpoints/createRecipe";
import getProfile from "./endpoints/getProfile";
import getRecipeById from "./endpoints/getRecipeById";
// import getAddressInfo from "./services/getAddressInfo";
// import resetPassword from "./endpoints/resetPassword";

app.post("/user/signup", createUser);

app.post("/user/login", login);

app.post("/recipe", createRecipe);

app.get("/user/profile", getProfile);

app.get("/recipe/:id", getRecipeById);

// app.put('/user/edit',);

// app.post('/user/password/reset',);
