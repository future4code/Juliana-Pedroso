export type authenticationData = {
  id: string;
};

export type userCredentials = {
  email: string,
  password: string
}

export type userPersonalInfo = {
  name: string,
  nickname: string
}

export type user = authenticationData & userCredentials & userPersonalInfo;
  
  // dá pra resumir essas informações como está acima com &...
  // id: string;
  // email: string;
  // password: string;
  // name: string;
  // nickname: string;

