// This model defines customer collection schema inside a MongoDB database.

// import Schema and model function from mongoose module
const {Schema, model}   = require('mongoose');


// This function executes mongoose schema method to set the scheema that will be run to mongoDB
const bookingFormSchema = new Schema(
    {
        first_name : {
            type: String,
            required: true,
            maxlength: 50
        },
        last_name : {
            type: String,
            required: true,
            maxlength: 50
        },
        email: {
            type: String,
        },
        phone_no: {
            type: Number,
            required: true,
            maxlength: 10
        },
        user_address:{
            type: Array,
            required: true,
        },
        event_name: {
            type: String,
            required: true,
        },
        event_date:{
            type: String,
            required: true,
        },
        preffered_package: {
            type: String,
        },
        service_type: {
            type: String,
            required: true,
        },
        event_location: {
            type: Array,
            required: true,
        },
        appointment_time_slot: {
            type: String
        },
        meal_menu:{
            type: Array,
            required: true,
        },
        booking_date: {
            type: Date,
            default: Date.now,
        },
        is_responded:{
            type: Boolean,
            default:'no'
        },
        token_money_paid:{
            type: Number,
            default:0
        },
        is_final_callbacked:{
            type: Boolean,
            default:false
        },
        total_expected_cost:{
            type: Number,
            default:0
        },
        is_any_due:{
            type: Boolean,
            default:true
        },
        is_service_done:{
            type: Boolean,
            default:false
        },
        is_service_canceled:{
            type: Boolean,
            default:false
        },
        updated_at: {
            type: Date,
            default: Date.now,
        },
    }
)

// Initalise a model for food_menus collection using created schema
const bookingFormModel = model("booking_details", bookingFormSchema);

module.exports = bookingFormModel;