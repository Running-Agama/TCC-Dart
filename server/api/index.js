import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'
import userRoute from './routes/userRoute.js'
const app = express()
app.use(express.json())
dotenv.config(path)


const port = 3001
const uri = process.env.ATLAS_URI

app.listen(port, ()=>{
    console.log('hell yeah n porta 3001')
})

app.get('/', (req,res)=>{
    res.send('ooi')
})

app.use('/api/users', userRoute)


mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('Conectado no MongoDB'))
.catch((erro)=> {
    console.log('erro '+ erro)
    console.log(uri)
})