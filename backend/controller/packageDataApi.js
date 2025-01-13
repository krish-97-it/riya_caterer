const foodPackageModel = require('../db_models/food_package_model');

exports.getFoodPackage = async (req,res) =>{
    await foodPackageModel.find({}).then(
        (package) => {
            if(package.length > 0){
                res.status(200).json({success: true, message:"Food Packages fetch successfully!", data:package});
            }else{
                res.status(500).json({success: false, message:"No Package added yet"});
            }
        }
    ).catch(
        (error)=> {
            res.status(500).body({success: false, message:error});
        }
    );
}