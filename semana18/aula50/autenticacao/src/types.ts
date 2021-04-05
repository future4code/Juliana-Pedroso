export type authenticationData = {
  id: string;
};

export type userCredentials = {
  email: string,
  password: string
}

export type user = authenticationData & userCredentials;


