import chatModel from "../models/chatModel.js"

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

//TODO: modificar o codigo pra verificar se o status é valido (pending, concluded e denied)


const updateChatStatus = async(req,res)=>{
    try{
        const chatId = req.params.chatId
        const status = req.params.newStatus
        
        chatModel.findByIdAndUpdate(chatId, status, {new: true})
            .then( (updatedDocument) => res.status(200).send(updatedDocument))
            .catch( ( error)=> res.status(400).send(error))
    }catch(erro){
        console.log(erro)
    }
}
export {updateChatStatus, createChat}