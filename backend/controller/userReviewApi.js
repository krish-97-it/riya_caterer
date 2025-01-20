const reviewModel = require('../db_models/review_model');

exports.getReviews = async (req,res) =>{
    await reviewModel.find({}).then(
        (review) => {
            if(review.length > 0){
                res.status(200).json({success: true, message:"review data found successfully!", data:review});
            }else{
                res.status(500).json({success: false, message:"No review added yet"});
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