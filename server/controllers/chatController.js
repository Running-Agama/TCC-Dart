import chatModel from "../models/chatModel"

const createChat = async(req,res)=>{
    const {firstId, secondId} = req.body

    try{
        const chat = await chatModel.findOne({
            members: {$all:[firstId, secondId]}
        })

        if(chat){
            return res.status(200).json(chat)
        }

        const newChat = new chatModel({
            members: [firstId, secondId]
        })
        const response = await newChat.save()

        res.status(200).json(response)

    }catch(error){
        res.status(500).json(error)
    }
}