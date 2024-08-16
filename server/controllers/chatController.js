import chatModel from "../models/chatModel.js"
import express from 'express'
const app = express()
app.use(express.json())
//Pra rapazeada do frontend, peço encarecidamente que não modifiquem isso aqui sem me consultar
//porque até onde vi ta tudo certinho nos requests, se deu erro no React o problema são vcs

const createChat = async(req,res)=>{
    const {userId, adminId} = req.body

    try{
        const chat = await chatModel.findOne({
            members: {$all:[userId, adminId]}
        })

        if(chat){
            return res.status(200).json(chat)
        }

        const newChat = new chatModel({
            members: [userId, adminId],
            status: "pending"
        })
        const response = await newChat.save()

        res.status(200).json(response)

    }catch(error){
        res.status(500).json(error)
    }
}

//TODO: modificar o codigo pra verificar se o status é valido (pending, concluded e closed)


const updateChatStatus = async(req,res)=>{
    try{
        const _id = { _id: req.body.chatId}
        console.log(_id)
        const status = { status: req.body.status}

        if(status!='pending' || status!='concluded' || status != 'closed'){
            res.status(400).send('Status invalido')
        }
        
       await chatModel.findOneAndUpdate(_id, status, {new:true})
        
        res.status(200).send('feito')
    }catch(erro){
        console.log('erro', erro)
        res.status(500).send(erro)
    }
}


export {updateChatStatus, createChat}