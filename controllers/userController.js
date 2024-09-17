import User from '../models/user.js'
import bcrypt from 'bcryptjs'
import generateJWT from '../helpers/generateJWT.js'
/*
{
    "email":"dalz@sena.edu.co",
    "password":1234
}
    */
export async function createUser(req, res){
    const body = req.body
    try {
        const user = new User(body)
        user.password = await bcrypt.hash(body.password, 10)//Manipulando el objeto
        await user.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}
//bcryptjs: Encriptar
//Create the method to Login use Post
export async function login(req, res){
    const {email, password} = req.body
    try {
        const user = await User.findOne({email})//Find the email
        if(user){
            const isLogged = await bcrypt.compare(password, user.password)//Comparar password
            const token = await generateJWT(user) //Create the token
            res.cookie('token', token) //Asign token to cookie
            if(!isLogged){
                res.status(404).json('User or password are incorrect')
            }
            else{
                res.status(202).json(token)
            }
        }
        else{
            res.status(404).json('User or password are incorrect')
        }
    } catch (error) {
        res.status(500).json(error)
    }
}