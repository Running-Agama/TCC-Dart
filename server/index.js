import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'
import userRoute from './routes/userRoute.js'
import chatRoute from './routes/chatRoute.js'

const app = express()
app.use(express.json())
dotenv.config(path)

app.use(cors())
const port = 3001
const uri = process.env.ATLAS_URI

app.listen(port, ()=>{
    console.log('hell yeah n porta 3001')
})

app.get('/', (req,res)=>{
    res.send('ooi')
})

app.use('/api/users', userRoute)
app.use('/api/chats', chatRoute)

mongoose.connect(uri,{

})
.then(()=> console.log('Conectado no MongoDB'))
.catch((erro)=> {
    console.log('erro '+ erro)
    console.log(uri)
})