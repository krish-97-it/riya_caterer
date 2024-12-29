import React,{useState} from "react";
import Costant_Variables from "../controller/constant-variables";
import ValidationFunctions from "../controller/validation";
import Swal from "sweetalert2";
import axios from "axios";

export function ContactForm(){

    const apiUrl            =   Costant_Variables.SERVER_BASE_URL+'/addNewUser';

    const [newUserData, setNewUserData] = useState({
        fullName: '',
        emailId: '',
        phoneNum: '',
        eventName: '',
        serviceType:'',
        paxCount:'',
        eventLocation: '',
        userComment: '',
    });

    const [fullNameErr, updateFullNameErr]          = useState({});
    const [emailIdErr, updateEmailIdErr]            = useState({});
    const [phoneNumErr, updatePhoneNumErr]          = useState({});
    const [eventNameErr, updateEventNameErr]         = useState({});
    const [serviceTypeErr, updateServiceTypeErr]    = useState({});
    const [paxCountErr, updatePaxCountErr]          = useState({});

    const [loadingMssg, setLoadingMssg]             = useState("");
    const [msgStyle, setMsgStyle]                   = useState("success");


    const handlenewUserInput = (e) => {
        let ele         =   e.target.name;
        let ele_val     =   e.target.value;

        if(ele === "emailId"){
            ele_val = ele_val.toLowerCase();
        }
        setNewUserData({...newUserData, [ele] : ele_val});

        if(ele === 'fullName'){
            let isfullNameValid = ValidationFunctions.nameValidation(ele,ele_val);

            if(isfullNameValid !== 'valid'){
                updateFullNameErr({...fullNameErr, err_mssg: isfullNameValid, isValid: "invalid"})
            }else{
                updateFullNameErr({...fullNameErr, err_mssg: isfullNameValid, isValid: "valid"})
            }
        }else if(ele === 'emailId'){
            let isEmailValid = ValidationFunctions.emailValidation(ele,ele_val);
            if(isEmailValid !== 'valid'){
                updateEmailIdErr({...emailIdErr, err_mssg: isEmailValid, isValid: "invalid"})
            }else{
                updateEmailIdErr({...emailIdErr, err_mssg: isEmailValid, isValid: "valid"})

            }
        }else if(ele === 'phoneNum'){
            let isPhoneNumValid = ValidationFunctions.phoneValidation(ele,ele_val);

            if(isPhoneNumValid !== 'valid'){
                updatePhoneNumErr({...phoneNumErr, err_mssg: isPhoneNumValid, isValid: "invalid"})
            }else{
                updatePhoneNumErr({...phoneNumErr, err_mssg: isPhoneNumValid, isValid: "valid"})

            }
        }else if(ele === 'eventType'){
            let isEventNameValid = ValidationFunctions.requiredValidation("eventType",ele_val);

            if(isEventNameValid !== 'valid'){
                updateEventNameErr({...eventNameErr, err_mssg: isEventNameValid, isValid: "invalid"})
            }else{
                updateEventNameErr({...eventNameErr, err_mssg: isEventNameValid, isValid: "valid"})
            }
        }else if(ele === 'servieType'){
            let isServieTypeValid = ValidationFunctions.servieTypeValidation(ele,ele_val,true);

            if(isServieTypeValid !== 'valid'){
                updateServiceTypeErr({...serviceTypeErr, err_mssg: isServieTypeValid, isValid: "invalid"})
            }else{
                updateServiceTypeErr({...serviceTypeErr, err_mssg: isServieTypeValid, isValid: "optional"})

            }
        }else if(ele === 'paxCount'){
            let ispaxCountValid = ValidationFunctions.requiredValidation("paxCount",ele_val);

            if(ispaxCountValid !== 'valid'){
                updatePaxCountErr({...paxCountErr, err_mssg: ispaxCountValid, isValid: "invalid"})
            }else{
                updatePaxCountErr({...paxCountErr, err_mssg: ispaxCountValid, isValid: "valid"})

            }
        }

    }

    const onSubmitValidation = (data) => {
        let isfullNameValid = ValidationFunctions.nameValidation("fullName",data.fullName);
        if(isfullNameValid !== 'valid'){
            updateFullNameErr({...fullNameErr, err_mssg: isfullNameValid, isValid: "invalid"})
        }else{
            updateFullNameErr({...fullNameErr, err_mssg: isfullNameValid, isValid: "valid"})
        }
        
        let isEmailValid = ValidationFunctions.emailValidation("emailId",data.emailId);
        if(isEmailValid !== 'valid'){
            updateEmailIdErr({...emailIdErr, err_mssg: isEmailValid, isValid: "invalid"})
        }else{
            updateEmailIdErr({...emailIdErr, err_mssg: isEmailValid, isValid: "valid"})
        }

        let isPhoneNumValid = ValidationFunctions.phoneValidation("phoneNum",data.phoneNum);
        if(isPhoneNumValid !== 'valid'){
            updatePhoneNumErr({...phoneNumErr, err_mssg: isPhoneNumValid, isValid: "invalid"})
        }else{
            updatePhoneNumErr({...phoneNumErr, err_mssg: isPhoneNumValid, isValid: "valid"})
        }

        let isEventNameValid = ValidationFunctions.requiredValidation("eventType",data.eventType);
        if(isEventNameValid !== 'valid'){
            updateEventNameErr({...eventNameErr, err_mssg: isEventNameValid, isValid: "invalid"})
        }else{
            updateEventNameErr({...eventNameErr, err_mssg: isEventNameValid, isValid: "valid"})
        }

        let isServiceTypeValid = ValidationFunctions.requiredValidation("serviceType",data.serviceType);
        if(isServiceTypeValid !== 'valid'){
            updateServiceTypeErr({...serviceTypeErr, err_mssg: isServiceTypeValid, isValid: "invalid"})
        }else{
            updateServiceTypeErr({...serviceTypeErr, err_mssg: isServiceTypeValid, isValid: "valid"})
        }

        let isPaxCountValid = ValidationFunctions.requiredValidation("paxCount",data.paxCount);
        if(isPaxCountValid !== 'valid'){
            updatePaxCountErr({...paxCountErr, err_mssg: isPaxCountValid, isValid: "invalid"})
        }else{
            updatePaxCountErr({...paxCountErr, err_mssg: isPaxCountValid, isValid: "valid"})

        }


        if(isfullNameValid === 'valid' && isEmailValid === 'valid' && isPhoneNumValid === 'valid' && isEventNameValid === 'valid' && isServiceTypeValid === 'valid' && isPaxCountValid === 'valid'){
            return true
        }else{
            return false
        }
    }

    const contactUsFormSubmit = async(e) => {
        e.preventDefault();
        let validationFlag  = onSubmitValidation(newUserData);

        if(validationFlag){
            setLoadingMssg("Please wait !! submitting form...")
            const formData  = {
                name: newUserData.fullName,
                email: newUserData.emailId,
                phone: parseInt(newUserData.phoneNum),
                event: newUserData.eventName,
                service: newUserData.serviceType,
                pax: newUserData.paxCount,
                location: newUserData.eventLocation,
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
                                text: "Query Sent Successfully!!",
                                icon: "success"
                            }
                        )
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
                console.log("Something went wrong!! please try again later");
            }

        }else{
            console.log("Invalid Form Fields");
        }

    }

    return(
        <form className="row g-3 needs-validation contact-us-form" id="contactUsForm" onSubmit={contactUsFormSubmit}>
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
                <label htmlFor="emailId" className="form-label">Email<span style={{color:"red"}}>*</span></label>
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
                <label htmlFor="eventName" className="form-label">Event Name<span style={{color:"red"}}>*</span></label>
                <select className="form-select" id="eventName" name="eventName" value={newUserData.eventName} onChange={(e)=>handlenewUserInput(e)} form-valid={eventNameErr.isValid} select-color={newUserData.eventName === ''?'novalue':'withvalue'}>
                    <option value="" disabled>Choose your Event</option>
                    {
                        Costant_Variables.event_Name.map((data,index)=>{
                            return(
                                <option value={data.value} key={index}>{data.name}</option>
                            )
                        })
                    }
                </select>
                {
                    (eventNameErr.err_mssg !== 'valid')?
                    <div className="invalid-feedback">
                        {eventNameErr.err_mssg}
                    </div>
                    :
                    <div className="valid-feedback">
                        {eventNameErr.err_mssg}
                    </div>
                }
            </div>
            <div className="col-md-6 col-sm-12 new-form-field">
            <label htmlFor="serviceType" className="form-label">Service Type<span style={{color:"red"}}>*</span></label>
                <select className="form-select" id="serviceType" name="serviceType" onChange={(e)=>handlenewUserInput(e)} form-valid={serviceTypeErr.isValid} value={newUserData.serviceType} select-color={newUserData.serviceType === ''?'novalue':'withvalue'}>
                    <option disabled value="" selected>Select your service type</option>
                    <option value="Cooking-Serving">Cooking & Serving</option>
                    <option value="Cooking-Delivery">Cooking & Delivery</option>
                </select>
                {
                    (serviceTypeErr.err_mssg !== 'valid')?
                    <div className="invalid-feedback">
                        {serviceTypeErr.err_mssg}
                    </div>
                    :
                    <div className="valid-feedback">
                        {serviceTypeErr.err_mssg}
                    </div>
                }
            </div>
            <div className="col-md-6 col-sm-12 new-form-field">
                <label htmlFor="paxCount" className="form-label">How many People?</label>
                <input type="number" className="form-control" id="paxCount" name="paxCount" placeholder="Enter the approx number of People" maxLength={6} value={newUserData.paxCount} onChange={(e)=>handlenewUserInput(e)} form-valid={paxCountErr.isValid}/>
                {
                    (paxCountErr.err_mssg !== 'valid')?
                    <div className="invalid-feedback">
                        {paxCountErr.err_mssg}
                    </div>
                    :
                    <div className="valid-feedback">
                        {paxCountErr.err_mssg}
                    </div>
                }
            </div>
            <div className="col-md-12 col-sm-12 new-form-field event-loc-field">
                <label htmlFor="eventLocation" className="form-label">Event Location</label>
                <textarea name="eventLocation" id="eventLocation" placeholder="Enter your event location/address..."></textarea>
            </div>
            <div className="col-md-12 col-sm-12 new-form-field user-comment-field">
                <label htmlFor="userComment" className="form-label">Comments</label>
                <textarea id="userComment" name="userComment" placeholder="Enter your comments here..."></textarea>
            </div>
            <div className="col-sm-12">
                <button className="btn btn-primary new-user-form-submit" type="submit">Submit form</button>
                <p style={{fontWeight:"600"}} error-mssg-style={msgStyle}>{loadingMssg}</p>
            </div>
        </form>
    )
}