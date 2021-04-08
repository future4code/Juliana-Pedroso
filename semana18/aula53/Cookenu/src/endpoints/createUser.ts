import { Request, Response } from "express";
import connection from "../connection";
import { userRole } from "../types";

export default async function createUser(
    req: Request, 
    res: Response
    ): Promise<void> {
    
        try {
            if (!req.body.name || !req.body.email || !req.body.password){
                throw new Error("Please check the fields")
            }
    
            if(req.body.email.indexOf("@") === -1) {
                throw new Error("Invalid email")
            }
    
            if (req.body.password.length < 6) {
                throw new Error("Password must be at least 6 characters")
            }
    
            const userData = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            }
    
            if(!userData.role) {
                userData.role = userRole.NORMAL
            }
            
            if (userData.role !== userRole.ADMIN && userData.role !== userRole.NORMAL) {
                throw new Error ("Pptions are 'NORMAL' or 'ADMIN'")
            }
            
    
            const id = new idGenerator()
            const newId = id.generateId()
    
            const hashManager = new HashManager()
            const cypherPassword = await hashManager.hash(userData.password)
    
            const userDatabase = new UserDatabase()
            await userDatabase.createUser(newId, userData.name, userData.email, cypherPassword, userData.role)
    
            const authenticator = new Authenticator()
            const token = authenticator.generateToken({
                id: newId,
                email: userData.email,
                role: userData.role
            })
    
            res.status(200).send({
                message: "Usuário cadastrado com sucesso!",
                token: token
            })
        } catch (error) {
            res.status(400).send({message: error.message})
        } finally {
            BaseDatabase.destroyConnection()
        }
}