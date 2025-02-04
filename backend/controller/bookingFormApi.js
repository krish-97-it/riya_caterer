const bookingFormModel = require('../db_models/booking_form_model');
const nodemailer       = require("nodemailer");
const {ObjectId}       = require('mongodb');


// Create a Html Body For OTP verification mail
const createEmailHtml = (bookId)=>{
const mail_html       = '<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">'+
                            '<div style="margin:50px auto;width:70%;padding:20px 0">'+
                                '<div style="border-bottom:2px solid #eee">'+
                                    '<div style="background-image: linear-gradient(to right, #ffbc87 0%, #f3f45d 50%, #2a8e75 100%); padding-left: 10px; margin-bottom: 5px;">'+
                                        '<a href="https://riya-caterer.onrender.com/" style="background-color:black; color:white !important; text-decoration:none !important; font-size: 18px; font-weight:600; padding:2px 8px; border-radius:6px">Riya Caterers</a>'+
                                    '</div>'+
                                '</div>'+
                                '<div style="padding-left:10px; padding-right: 10px;">'+
                                    '<p style="font-size:1.1em">Hi,</p>'+
                                    '<p>Thank you for choosing Riya Caterers. You have successfully booked us for your upcomming event.</p>'+
                                    '<p>Your Booking Id is - </p>'+
                                    '<h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">'+bookId+'</h2>'+
                                    '<p>Soon we will contact with you for further discussion.</p>'+
                                    '<p style="font-size:0.9em;">Regards,<br />Team Riya Caterers</p>'+
                                    // '<img src="https://img.perceptpixel.com/pykhlszs/shop-logo-one-1.jpg" alt="brand logo" width="80px" height="80px">'+
                                    '<hr style="border:none;border-top:1px solid #eee" />'+
                                '</div>'
                                '<div style="float:right;padding:2px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">'+
                                    // '<p>KrishMish</p>'+
                                    '<p>For help mail at - mish.krish1996@gmail.com</p>'+
                                    // '<p>California</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>';
    return mail_html;
}

exports.saveBookingData = async(req,response) => {
    await bookingFormModel.create(req.body).then(
        (data) =>{
            if(data){
                const user_email        = data.email;
                const booking_id        = (data._id).toString();

                // if user email is not empty
                if(user_email !== '' || user_email !== 'undefined' || user_email !== undefined){
                    const transporter       = nodemailer.createTransport({  //Set Up Email Server and Parameters
                        service: 'gmail',
                        host:'smtp.gmail.com',
                        port: 465,
                        secure: true, // true for port 465, false for other ports
                        auth: {
                            user: 'riyacaterer.web@gmail.com',
                            pass: process.env.EMAIL_APP_PASS
                        }
                    });
                    const emailHtml         = createEmailHtml(booking_id);
                    const email_params      = {
                        from: '"Riya Caterers" <riyacaterer.web@gmail.com>', 
                        to: user_email, // list of receivers
                        subject: "OTP Verification", 
                        html: emailHtml
                    }

                    transporter.sendMail(email_params).then(
                        (res) => {
                            if(res.accepted.length > 0){
                                console.log("email sent");
                                // return response.status(200).json({success:{is_booked:true, is_email_sent:true}, message: "Booked Successfully!!. Booking Id is sent on the given email", data:data});
                            }else{
                                console.log("email not sent");
                                // return response.status(200).json({success:{is_booked:true, is_email_sent: false}, message: "Booked Successfully! Failed to sent booking Id to the given mail", data:data});
                            }
                        }
                    ).catch(
                        (error) =>{
                            console.log(error);
                            // return response.status(500).json({
                            //     success: false,
                            //     message: "Internal server error",
                            //     error: error
                            // })
                        }
                    );
                }

               return response.status(200).json({success:{is_booked:true, is_email_sent: false}, message: "Booking Successfull! Booking Id will be sent in your number or email", data:data});

            }else{
               return response.status(200).json({success:{is_booked:false, is_email_sent: false}, message: "Booking Failed!. Try again after sometimes.", error:"Operation Failed"})
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

exports.getBookingDetails = async(req,res) => {
    const bookingId  = req.body.bookId;
    const firstName  = req.body.firstName;
    const lastName   = req.body.lastName;
    const phoneNum   = req.body.phoneNum;
    const eventDate  = req.body.eventDate;

    try{
        if(bookingId !== ''){
            const obj_id       = new ObjectId(bookingId);
            const booking_data = await bookingFormModel.find({_id: obj_id});
            return res.status(200).json({success:true, message: "Successfully fetched Booking Details!",data:booking_data});
        }else{
            if(eventDate !== ''){
                let booking_data = await bookingFormModel.find({"first_name":firstName, "last_name":lastName, "phone_no":phoneNum, "event_date":eventDate});
                if(booking_data.length > 0){
                    return res.status(200).json({success:true, message: "Successfully fetched Booking Details!", data: booking_data});
                }else{
                    return res.status(200).json({success:false, message: "No booking history found"});
                }
            }else{
                let booking_data = await bookingFormModel.find({"first_name":firstName, "last_name":lastName, "phone_no":phoneNum});
                if(booking_data.length > 0){
                    return res.status(200).json({success:true, message: "Successfully fetched Booking Details!", data: booking_data});
                }else{
                    return res.status(200).json({success:false, message: "No booking history found"});
                }
            }
        }
        
    }
    catch(error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        })
    }
}