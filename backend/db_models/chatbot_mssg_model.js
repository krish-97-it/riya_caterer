// This model defines customer collection schema inside a MongoDB database.

// import Schema and model function from mongoose module
const {Schema, model}   = require('mongoose');


// This function executes mongoose schema method to set the scheema that will be run to mongoDB
const ChatBotSchema = new Schema(
    {
        user_id     : {
            type: String
        },
        msg_title   : {
            type: String
        },
        msg_txt     : {
            type: String
        },
        buttons     :   {
            type    : Array
        },
        links       :   {
            type    : Array
        },
        lists       :   {
            type    : Array
        },
        msg_keys    : {
            type: String
        },
        created_at  : {
            type: Date,
            default: Date.now,
        },
        updated_at  : {
            type: Date,
            default: Date.now,
        },
        is_disabled : {
            type: String
        }
    }
)

// Initalise a model for food_menus collection using created schema
const chatBotModel = model("chatbot_messages", ChatBotSchema);

module.exports = chatBotModel;