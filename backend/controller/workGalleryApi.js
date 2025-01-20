const galleryModel = require('../db_models/gallery_model');

exports.getGallery = async (req,res) =>{
    await galleryModel.find({}).then(
        (gallery) => {
            if(gallery.length > 0){
                res.status(200).json({success: true, message:"Gallery Images/ Video fetch successfully!", data:gallery});
            }else{
                res.status(500).json({success: false, message:"No Images or Videos added yet"});
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