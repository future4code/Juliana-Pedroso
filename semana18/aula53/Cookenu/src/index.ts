import app from "./app";
import createUser from "./endpoints/createUser";
import login from "./endpoints/login";
import createRecipe from "./endpoints/createRecipe";
import getOwnProfile from "./endpoints/getOwnProfile";
import getRecipeById from "./endpoints/getRecipeById";
import getProfileById from "./endpoints/getProfileById";
import getFeed from "./endpoints/getFeed";
// import getAddressInfo from "./services/getAddressInfo";
// import resetPassword from "./endpoints/resetPassword";

app.post("/user/signup", createUser);

app.post("/user/login", login);

app.post("/recipe", createRecipe);

app.get("/user/profile", getOwnProfile);

app.get("/user/profile/:id", getProfileById);

app.get("/recipe/:id", getRecipeById);

app.get("/feed", getFeed);

// app.put('/user/edit',);

// app.post('/user/password/reset',);
