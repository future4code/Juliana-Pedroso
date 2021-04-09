export type authenticationData = {
    id: string,
    role: string
}

export type userCredentials = {
    email: string
    password: string
}

export type userPersonalInfo = {
    id: string;
    name: string;
    email: string
  };

export enum userRole {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export type user = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: userRole
}