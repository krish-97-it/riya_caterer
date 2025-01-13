// This model defines customer collection schema inside a MongoDB database.

// import Schema and model function from mongoose module
const {Schema, model}   = require('mongoose');

// This function executes mongoose schema method to set the scheema that will be run to mongoDB
const PackageSchema = new Schema(
    {
        package_name : {
            type: String
        },
        package_icon: {
            type: String
        },
        download_link: {
            type: String
        },
        is_enabled: {
            type: Boolean,
            default: true
        },
        key_points: {
            type: Array
        },
        created_at: {
            type: Date,
            default: Date.now,
        },
        updated_at: {
            type: Date,
            default: Date.now,
        }
    }
)

// Initalise a model for food_menus collection using created schema
const foodPackageModel = model("package_details", PackageSchema);

module.exports = foodPackageModel;