const userQueryModel = require('../db_models/user_query_model');


exports.saveUserQuery = async(req,response) => {
    await userQueryModel.create(req.body).then(
        (data) =>{
            if(data){
                response.status(200).json({success:true, message: "Your Query is sent successfully!!", data:data})
            }else{
                response.status(200).json({success:false, message: "Query submission Failed!. Try again after sometimes.", error:"Operation Failed"})
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
    )  
}