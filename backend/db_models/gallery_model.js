// This model defines customer collection schema inside a MongoDB database.

// import Schema and model function from mongoose module
const {Schema, model}   = require('mongoose');


// This function executes mongoose schema method to set the scheema that will be run to mongoDB
const GallerySchema = new Schema(
    {
        file_src : {
            type: String
        },
        file_type: {
            type: String
        },
        alt_tag: {
            type: String
        },
        group: {
            type: String
        },
        most_liked: {
            type: Number
        },
        is_approve: {
            type: Boolean,
            default: true
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
const galleryModel = model("gallery_images", GallerySchema);

module.exports = galleryModel;