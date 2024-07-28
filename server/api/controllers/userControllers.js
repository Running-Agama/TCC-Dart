import userModel from "../models/userModel.js"
import validator from "validator"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const createToken = (_id)=>{
    const jwtkey = process.env.JWT_SECRET_KEY
    return jwt.sign({_id}, jwtkey)
}

const userRegister = async (req,res)=>{
    const {name, email, password, postal, housenumber} = req.body

    let user = await userModel.findOne({email})

    try{
        if(user){
            return res.status(400).send('Email já utilizado')
        }
        if(!name||!email||!password||!postal||!housenumber){
            return res.status(400).send('Todos os campos devem ser preenchidos')
        }
        if(!validator.isStrongPassword){
            return res.status(400).send('Senha fraca, minimo de 8 caracteres, um caractere especial, uma letra maiuscula e um numero')
        }
        if(!validator.isEmail){
            return res.status(400).send('Formato de email incorreto')
        }

        user = new userModel({name, email, password, postal, housenumber})
        const salt = await bcrypt.genSalt(10)

        user.password = await bcrypt.hash(user.password, salt)

        await user.save()

        const token = createToken(user._id)

        res.status(200).send({id: user._id, name, email, password, postal, housenumber})
    }
    catch(erro){
        console.log(erro)
        res.status(500).send('Erro no userController' + erro)
    }
}

export default userRegister