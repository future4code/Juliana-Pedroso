export interface authenticationData {
    id: string,
    email: string,
    role: string
}

export enum userRole {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}