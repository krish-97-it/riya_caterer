const chatBotModel = require('../db_models/chatbot_mssg_model');

exports.getChatBotMssg = async (req,res) =>{
    await chatBotModel.find({}).then(
        (data) => {
            if(data.length > 0){
                res.status(200).json({success: true, message:"Chatbot msseges loaded successfully!", data:data});
            }else{
                res.status(500).json({success: false, message:"Failed to fetch chatbot messages"});
            }
        }
    ).catch(
        (error) => {
            response.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message
            })
        }
    );
}