import React,{useState} from "react";
import Constant_Variables from "../controller/constant-variables";
import ValidationFunctions from "../controller/validation";
import Swal from "sweetalert2";
// import axios from "axios";

export function ContactForm({bookingStartDate, bookingEndDate}){

    const apiUrl            =   Constant_Variables.SERVER_BASE_URL+'/submitQueries';

    const [newUserData, setNewUserData] = useState({
        fullName: '',
        emailId: '',
        phoneNum: '',
        queryType: '',
        openTimeSlot: '06:00',
        closeTimeSlot: '21:00',
        userComment: '',
    });

    const [fullNameErr, updateFullNameErr]              = useState({});
    const [emailIdErr, updateEmailIdErr]                = useState({});
    const [phoneNumErr, updatePhoneNumErr]              = useState({});
    const [queryTypeErr, updateQueryTypeErr]            = useState({});

    const [loadingMssg, setLoadingMssg]                 = useState("");
    const [msgStyle, setMsgStyle]                       = useState("success");


    const handlenewUserInput = (e) => {
        let ele         =   e.target.name;
        let ele_val     =   e.target.value;


        if(ele === "emailId" && ele_val !== ''){
            ele_val = ele_val.toLowerCase();
        }

        setNewUserData({...newUserData, [ele] : ele_val});

        if(ele === 'fullName'){
            let isfullNameValid = ValidationFunctions.nameValidation("Full Name",ele_val,false);

            if(isfullNameValid !== 'valid'){
                updateFullNameErr({...fullNameErr, err_mssg: isfullNameValid, isValid: "invalid"})
            }else{
                updateFullNameErr({...fullNameErr, err_mssg: isfullNameValid, isValid: "valid"})
            }
        }else if(ele === 'emailId'){
            let isEmailValid = ValidationFunctions.emailValidation("Email Id",ele_val,true);
            if(isEmailValid !== 'valid'){
                updateEmailIdErr({...emailIdErr, err_mssg: isEmailValid, isValid: "invalid"})
            }else{
                updateEmailIdErr({...emailIdErr, err_mssg: isEmailValid, isValid: "optional"});
            }
        }else if(ele === 'phoneNum'){
            let isPhoneNumValid = ValidationFunctions.phoneValidation("Mobile No.",ele_val,false);

            if(isPhoneNumValid !== 'valid'){
                updatePhoneNumErr({...phoneNumErr, err_mssg: isPhoneNumValid, isValid: "invalid"})
            }else{
                updatePhoneNumErr({...phoneNumErr, err_mssg: isPhoneNumValid, isValid: "valid"})

            }
        }else if(ele === 'queryType'){
            let isQueryTypeValid = ValidationFunctions.requiredValidation("Query Type",ele_val,false);

            if(isQueryTypeValid !== 'valid'){
                updateQueryTypeErr({...queryTypeErr, err_mssg: isQueryTypeValid, isValid: "invalid"})
            }else{
                updateQueryTypeErr({...queryTypeErr, err_mssg: isQueryTypeValid, isValid: "valid"})
            }
        }
    }

    const onSubmitValidation = (data) => {
        let isfullNameValid = ValidationFunctions.nameValidation("Full Name",data.fullName,false);
        if(isfullNameValid !== 'valid'){
            updateFullNameErr({...fullNameErr, err_mssg: isfullNameValid, isValid: "invalid"})
        }else{
            updateFullNameErr({...fullNameErr, err_mssg: isfullNameValid, isValid: "valid"})
        }
        
        let isEmailValid = ValidationFunctions.emailValidation("Email Id",data.emailId,true);
        if(isEmailValid !== 'valid'){
            updateEmailIdErr({...emailIdErr, err_mssg: isEmailValid, isValid: "invalid"})
        }else{
            updateEmailIdErr({...emailIdErr, err_mssg: isEmailValid, isValid: "optional"})
        }

        let isPhoneNumValid = ValidationFunctions.phoneValidation("Mobile No.",data.phoneNum,false);
        if(isPhoneNumValid !== 'valid'){
            updatePhoneNumErr({...phoneNumErr, err_mssg: isPhoneNumValid, isValid: "invalid"})
        }else{
            updatePhoneNumErr({...phoneNumErr, err_mssg: isPhoneNumValid, isValid: "valid"})
        }

        let isQueryTypeValid = ValidationFunctions.requiredValidation("Query Type",data.queryType,false);
        if(isQueryTypeValid !== 'valid'){
            updateQueryTypeErr({...queryTypeErr, err_mssg: isQueryTypeValid, isValid: "invalid"})
        }else{
            updateQueryTypeErr({...queryTypeErr, err_mssg: isQueryTypeValid, isValid: "valid"})
        }

        if(isfullNameValid === 'valid' && isEmailValid === 'valid' && isPhoneNumValid === 'valid' && isQueryTypeValid === 'valid'){
            return true
        }else{
            return false
        }
    }

    const contactUsFormSubmit   = async(e) => {
        e.preventDefault();
        let validationFlag      = onSubmitValidation(newUserData);
        if(validationFlag){
            let openTimeSlot_full   = getAmPmTime((newUserData.openTimeSlot),'yes');
            let closeTimeSlot_full  = getAmPmTime((newUserData.closeTimeSlot),'yes');
            let concat_time_slot    = (openTimeSlot_full === closeTimeSlot_full)?openTimeSlot_full:(openTimeSlot_full+" - "+closeTimeSlot_full);
            setLoadingMssg("Please wait !! submitting form...");
            const formData  = {
                name: newUserData.fullName,
                email: newUserData.emailId,
                phone_no: parseInt(newUserData.phoneNum),
                query_type: newUserData.queryType,
                appointment_time_slot : concat_time_slot,
                comment: newUserData.userComment,
            };
            const formDataJsonString    =   JSON.stringify(formData);

            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    body: formDataJsonString,
                    datatype: "JSON",
                    headers: { 'Content-Type': 'application/json' },
                })

                const isJson = response.headers.get('content-type')?.includes('application/json');
                const responseData = isJson && await response.json();
                if(response.ok === true){
                    if(responseData.success === true){
                        setLoadingMssg("");
                        Swal.fire(
                            {
                                title: "Success!",
                                text: "Query Sent Successfully!! You will get a response within 12 hours.",
                                icon: "success"
                            }
                        )
                        // .then(
                        //     (result) =>{
                        //         if (result.isConfirmed) {
                        //             window.location.href = window.location.origin;;
                        //         }
                        //     }
                        // )
                    }else{
                        setLoadingMssg("");
                        Swal.fire(
                            {
                                title: "Failed!",
                                text: "Failed to send your query!!",
                                icon: "error"
                            }
                        )
                    }
                }else{
                    setLoadingMssg("Something went wrong !! Please try after sometimes...");
                    setMsgStyle("error");
                    const error = (responseData && responseData.message) || response.status;
                    return Promise.reject(error);
                }

            }
            catch(error){
                console.log(error+"Something went wrong!! please try again later");
            }

        }else{
            console.log("Invalid Form Fields");
        }

    }

    function getAmPmTime(time,meridiem){
        var [h, m]    = time.split(":");
        console.log(h)
        console.log(m)
        if(meridiem === 'yes'){
            var format_time = ((h % 12 ? h % 12 : 12) + ":" + m);
            var full_time   = h >= 12 ? format_time+'PM' : format_time+'AM';
            return full_time
        }else{
            var full_time = ((h % 12 ? h % 12 : 12) + ":" + m);
            return full_time
        }
    }

    return(
        <form className="row g-3 needs-validation contact-us-form" id="contactUsForm" onSubmit={contactUsFormSubmit}>
            <div className="col-sm-12 event-form-heading mt-4 pb-0" style={{textAlign:"left", padding:"5px 10px 0px 10px"}}>
                <h5 className="mb-0">
                    <span className="h-txt" style={{minWidth:"126px"}}>Basic Details</span>
                    <span className="hr-line"></span>
                </h5>
            </div>
            <div className="col-md-6 col-sm-12 new-form-field">
                <label htmlFor="fullName" className="form-label">Name<span style={{color:"red"}}>*</span></label>
                <input type="text" className="form-control" id="fullName" name="fullName" placeholder="Enter your name..." value={newUserData.fullName} onChange={(e)=>handlenewUserInput(e)} form-valid={fullNameErr.isValid}/>
                {
                    (fullNameErr.err_mssg !== 'valid')?
                    <div className="invalid-feedback">
                        {fullNameErr.err_mssg}
                    </div>
                    :
                    <div className="valid-feedback">
                        {fullNameErr.err_mssg}
                    </div>
                }
            </div>
            <div className="col-md-6 col-sm-12 new-form-field" style={{position:"relative"}}>
                <label htmlFor="emailId" className="form-label">Email</label>
                <input type="text" className="form-control" id="emailId" name="emailId" placeholder="Enter your email..." value={newUserData.emailId} onChange={(e)=>handlenewUserInput(e)} form-valid={emailIdErr.isValid} style={{paddingRight:"85px"}}/>
                {
                    (emailIdErr.isValid === "invalid")?
                    <div className="invalid-feedback">
                        {emailIdErr.err_mssg}
                    </div>
                    :
                    <div className="valid-feedback email-id-valid-feedback">
                        {
                            (emailIdErr.err_mssg !== 'valid')? emailIdErr.err_mssg : ''
                        }
                    </div>
                }
            </div>
            <div className="col-md-6 col-sm-12 new-form-field">
                <label htmlFor="phoneNum" className="form-label">Phone no.<span style={{color:"red"}}>*</span></label>
                <input type="tel" className="form-control" id="phoneNum" name="phoneNum" placeholder="Enter your Phone no..." value={newUserData.phoneNum} onChange={(e)=>handlenewUserInput(e)} form-valid={phoneNumErr.isValid} maxLength="10"/>
                {
                    (phoneNumErr.err_mssg !== 'valid')?
                    <div className="invalid-feedback">
                        {phoneNumErr.err_mssg}
                    </div>
                    :
                    <div className="valid-feedback">
                        {phoneNumErr.err_mssg}
                    </div>
                }
            </div>
            <div className="col-md-6 col-sm-12 new-form-field">
                <label htmlFor="queryType" className="form-label">Query Type<span style={{color:"red"}}>*</span></label>
                <select className="form-select" id="queryType" name="queryType" value={newUserData.queryType} onChange={(e)=>handlenewUserInput(e)} form-valid={queryTypeErr.isValid} select-color={newUserData.queryType === ''?'novalue':'withvalue'}>
                    <option value="" disabled>Choose your Event</option>
                    <option value="new booking">Query about New Booking</option>
                    <option value="existing booking">Query about Existing Booking</option>
                    <option value="complain">Register a Complain</option>
                    <option value="others">Other Reason</option>
                </select>
                {
                    (queryTypeErr.err_mssg !== 'valid')?
                    <div className="invalid-feedback">
                        {queryTypeErr.err_mssg}
                    </div>
                    :
                    <div className="valid-feedback">
                        {queryTypeErr.err_mssg}
                    </div>
                }
            </div>
            <div className="col-sm-12 event-form-heading mt-5 mb-0" style={{textAlign:"left", padding:"5px 10px 0px 10px"}}>
                <h5 className="mb-0">
                    <span className="h-txt" style={{minWidth:"218px"}}>Appointment Time Slot</span>
                    <span className="hr-line"></span>
                </h5>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6 new-form-field">
                <label htmlFor="openTimeSlot" className="form-label">From<span style={{color:"red"}}>*</span></label>
                <input id="openTimeSlot" type="time" className="form-control" name="openTimeSlot" min="06:00" max="11:59" onChange={(e)=>handlenewUserInput(e)} value={(newUserData.openTimeSlot !== '')?newUserData.openTimeSlot:''} required/>
                {/* <input id="party" type="datetime-local" name="party-date" min={bookingStartDate} max={bookingEndDate} onChange={(e)=>handlenewUserInput(e)} value={newUserData.prefferedTimelot} required/> */}
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6 new-form-field">
                <label htmlFor="closeTimeSlot" className="form-label">To<span style={{color:"red"}}>*</span></label>
                <input id="closeTimeSlot" className="form-control" type="time" name="closeTimeSlot" min="12:00" max="21:00" onChange={(e)=>handlenewUserInput(e)} value={(newUserData.closeTimeSlot !== '')?newUserData.closeTimeSlot:''} required/>
            </div>
            <div className="col-md-12 col-sm-12 new-form-field user-comment-field">
                <label htmlFor="userComment" className="form-label">Comments</label>
                <textarea id="userComment" name="userComment" placeholder="Enter your comments here..." value={newUserData.userComment} onChange={(e)=>handlenewUserInput(e)}></textarea>
            </div>
            <div className="col-sm-12">
                <button className="btn btn-primary new-user-form-submit" type="submit">Send your query</button>
                <p style={{fontWeight:"600"}} error-mssg-style={msgStyle}>{loadingMssg}</p>
            </div>
        </form>
    )
}