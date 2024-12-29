// This model defines customer collection schema inside a MongoDB database.

// import Schema and model function from mongoose module
const {Schema, model}   = require('mongoose');


// This function executes mongoose schema method to set the scheema that will be run to mongoDB
const UserQuerySchema = new Schema(
    {
        name : {
            type: String
        },
        email: {
            type: String
        },
        phone_no: {
            type: Number
        },
        event_name: {
            type: String
        },
        service_type: {
            type: String
        },
        plate_count: {
            type: Number
        },
        event_location: {
            type: String
        },
        comment: {
            type: String
        },
        is_responded: {
            type: Boolean,
            default: false
        },
        created_at: {
            type: Date,
            default: Date.now,
        },
        updated_at: {
            type: Date,
            default: Date.now,
        },
    }
)

// Initalise a model for food_menus collection using created schema
const userQueryModel = model("user_queries", UserQuerySchema);

module.exports = userQueryModel;