import app from "./app"
import createUser from "./endpoints/createUser";
import login from "./endpoints/login";
import createRecepie from "./endpoints/createRecepie";
import getProfile from "./endpoints/getProfile";
import getRecepie from "./endpoints/getRecepie";
// import { hash, compare } from "./services/hashManager";
// import getAddressInfo from "./services/getAddressInfo";
// import resetPassword from "./endpoints/resetPassword";

app.post('/user/signup', createUser);

app.post('/user/login', login);

app.post('/recepie', createRecepie);

app.get('/user/profile', getProfile);

app.get('/recepie', getRecepie);



// app.put('/user/edit',);

// app.post('/user/password/reset',);
