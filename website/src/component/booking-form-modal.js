import React, {useState} from "react";
import Constant_Variables from "../controller/constant-variables";
import ValidationFunctions from "../controller/validation";
import Swal from 'sweetalert2';
import axios from "axios";
import CreateableFormSection from "./create-form-section";


export default function LoginModal({showBookingModal, closeBookingModal, packageDetails, bookingStartDate, bookingEndDate}){

    const bookingApiUrl                 =   Constant_Variables.SERVER_BASE_URL+'/submitBooking';

    const [newUserData, setNewUserData] = useState({
        firstName: '',
        lastName: '',
        emailId: '',
        phoneNum: '',
        userState: '',
        userDistrict: '',
        userCity: '',
        userPinCode: '',
    });

    const [firstNameErr, updateFirstNameErr]                = useState({});
    const [lastNameErr, updateLastNameErr]                  = useState({});
    const [emailIdErr, updateEmailIdErr]                    = useState({});
    const [phoneNumErr, updatePhoneNumErr]                  = useState({});
    const [userStateErr, updateUserStateErr]                = useState({});
    const [userDistrictErr, updateUserDistrictErr]          = useState({});
    const [userPinCodeErr, updateUserPinCodeErr]            = useState({});
    const [userCityErr, updateUserCityErr]                  = useState({});

    const [loadingMssg, setLoadingMssg]                     = useState("");
    const [msgStyle, setMsgStyle]                           = useState("success");


    const handlenewUserInput = (e) => {
        let ele         =   e.target.name;
        let ele_val     =   e.target.value;

        if(ele === "emailId"){
            ele_val = ele_val.toLowerCase();
        }
        setNewUserData({...newUserData, [ele] : ele_val});

        if(ele === 'firstName'){
            let isfirstNameValid = ValidationFunctions.nameValidation("First Name",ele_val,false);

            if(isfirstNameValid !== 'valid'){
                updateFirstNameErr({...firstNameErr, err_mssg: isfirstNameValid, isValid: "invalid"})
            }else{
                updateFirstNameErr({...firstNameErr, err_mssg: isfirstNameValid, isValid: "valid"})
            }
        }else if(ele === 'lastName'){
            let isLastNameValid = ValidationFunctions.nameValidation("Last Name",ele_val,false);

            if(isLastNameValid !== 'valid'){
                updateLastNameErr({...lastNameErr, err_mssg: isLastNameValid, isValid: "invalid"})
            }else{
                updateLastNameErr({...lastNameErr, err_mssg: isLastNameValid, isValid: "valid"})
            }
        }else if(ele === 'emailId'){
            let isEmailValid = ValidationFunctions.emailValidation("Email Id",ele_val,false);
            if(isEmailValid !== 'valid'){
                updateEmailIdErr({...emailIdErr, err_mssg: isEmailValid, isValid: "invalid"})
            }else{
                updateEmailIdErr({...emailIdErr, err_mssg: isEmailValid, isValid: "valid"})

            }
        }else if(ele === 'phoneNum'){
            let isPhoneNumValid = ValidationFunctions.phoneValidation("Mobile No.",ele_val,false);

            if(isPhoneNumValid !== 'valid'){
                updatePhoneNumErr({...phoneNumErr, err_mssg: isPhoneNumValid, isValid: "invalid"})
            }else{
                updatePhoneNumErr({...phoneNumErr, err_mssg: isPhoneNumValid, isValid: "valid"})

            }
        }else if(ele === 'userState'){
            let isStateValid = ValidationFunctions.requiredValidation("State",ele_val,false);

            if(isStateValid !== 'valid'){
                updateUserStateErr({...userStateErr, err_mssg: isStateValid, isValid: "invalid"})
            }else{
                updateUserStateErr({...userStateErr, err_mssg: isStateValid, isValid: "valid"});
            }
        }else if(ele === 'userDistrict'){
            let isDistrictValid = ValidationFunctions.requiredValidation("District",ele_val,false);

            if(isDistrictValid !== 'valid'){
                updateUserDistrictErr({...userDistrictErr, err_mssg: isDistrictValid, isValid: "invalid"})
            }else{
                updateUserDistrictErr({...eventDistrictErr, err_mssg: isDistrictValid, isValid: "valid"})

            }
        }else if(ele === 'userCity'){
            let isCityValid = ValidationFunctions.cityValidation('City',ele_val,false);

            if(isCityValid !== 'valid'){
                updateUserCityErr({...userCityErr, err_mssg: isCityValid, isValid: "invalid"})
            }else{
                updateUserCityErr({...userCityErr, err_mssg: isCityValid, isValid: "valid"})

            }
        }else if(ele === 'userPinCode'){
            let isPinCodeValid = ValidationFunctions.pinCodeValidation('Pin Code',ele_val,false);

            if(isPinCodeValid !== 'valid'){
                updateUserPinCodeErr({...userPinCodeErr, err_mssg: isPinCodeValid, isValid: "invalid"})
            }else{
                updateUserPinCodeErr({...userPinCodeErr, err_mssg: isPinCodeValid, isValid: "valid"})

            }
        }

    }

    const onSubmitFirstSlide = (data) => {
        let isfirstNameValid = ValidationFunctions.nameValidation("First Name",data.firstName,false);
        if(isfirstNameValid !== 'valid'){
            updateFirstNameErr({...firstNameErr, err_mssg: isfirstNameValid, isValid: "invalid"})
        }else{
            updateFirstNameErr({...firstNameErr, err_mssg: isfirstNameValid, isValid: "valid"})
        }

        let isLastNameValid = ValidationFunctions.nameValidation("Last Name",data.lastName,false);
        if(isLastNameValid !== 'valid'){
            updateLastNameErr({...lastNameErr, err_mssg: isLastNameValid, isValid: "invalid"})
        }else{
            updateLastNameErr({...lastNameErr, err_mssg: isLastNameValid, isValid: "valid"})
        }
        
        let isEmailValid = ValidationFunctions.emailValidation("Email Id",data.emailId,false);
        if(isEmailValid !== 'valid'){
            updateEmailIdErr({...emailIdErr, err_mssg: isEmailValid, isValid: "invalid"})
        }else{
            updateEmailIdErr({...emailIdErr, err_mssg: isEmailValid, isValid: "valid"})
        }

        let isPhoneNumValid = ValidationFunctions.phoneValidation("Mobile No.",data.phoneNum,false);
        if(isPhoneNumValid !== 'valid'){
            updatePhoneNumErr({...phoneNumErr, err_mssg: isPhoneNumValid, isValid: "invalid"})
        }else{
            updatePhoneNumErr({...phoneNumErr, err_mssg: isPhoneNumValid, isValid: "valid"})
        }

        let isStateValid = ValidationFunctions.requiredValidation("State",data.userState,false);
        if(isStateValid !== 'valid'){
            updateUserStateErr({...userStateErr, err_mssg: isStateValid, isValid: "invalid"})
        }else{
            updateUserStateErr({...userStateErr, err_mssg: isStateValid, isValid: "valid"});
        }
        
        let isDistrictValid = ValidationFunctions.requiredValidation("District",data.userDistrict,false);
        if(isDistrictValid !== 'valid'){
            updateUserDistrictErr({...userDistrictErr, err_mssg: isDistrictValid, isValid: "invalid"})
        }else{
            updateUserDistrictErr({...userDistrictErr, err_mssg: isDistrictValid, isValid: "valid"})

        }

        let isCityValid = ValidationFunctions.cityValidation('City',data.userCity,false);
        if(isCityValid !== 'valid'){
            updateUserCityErr({...userCityErr, err_mssg: isCityValid, isValid: "invalid"})
        }else{
            updateUserCityErr({...userCityErr, err_mssg: isCityValid, isValid: "valid"})
        }

        let isPinCodeValid = ValidationFunctions.pinCodeValidation('Pin Code',data.userPinCode,false);
        if(isPinCodeValid !== 'valid'){
            updateUserPinCodeErr({...userPinCodeErr, err_mssg: isPinCodeValid, isValid: "invalid"})
        }else{
            updateUserPinCodeErr({...userPinCodeErr, err_mssg: isPinCodeValid, isValid: "valid"})
        }

        if(isfirstNameValid === 'valid' && isLastNameValid === 'valid' && isEmailValid === 'valid' && isPhoneNumValid === 'valid' && isStateValid === 'valid' && isDistrictValid === 'valid' && isCityValid === 'valid' && isPinCodeValid === 'valid'){
            return true
        }else{
            return false
        }
    }

    // On click on next button of the form carousel
    function goToNextSlide(e){
        e.preventDefault();
        let validationFlag  = onSubmitFirstSlide(newUserData);

        if(validationFlag){
            document.querySelector("button.carousel-next-btn").click();
        }
    }

    const [eventData, setEventData] = useState({
        eventName: '',
        eventDate:'',
        serviceType:'',
        prefferedPackage:'',
        state: 'West Bengal',
        district: '',
        city: '',
        pinCode: '',
        eventLandmark:'',
    });

    const [eventNameErr, updateEventNameErr]                = useState({});
    const [eventDateErr, updateEventDateErr]                = useState({});
    // const [prefferedPackageErr, updatePrefferedPackageErr]  = useState({});
    const [serviceTypeErr, updateServiceTypeErr]            = useState({});
    const [eventStateErr, updateEventStateErr]              = useState({});
    const [eventDistrictErr, updateEventDistrictErr]        = useState({});
    const [eventCityErr, updateEventCityErr]                = useState({});
    const [eventPinCodeErr, updateEventPinCodeErr]          = useState({});



    // Second Slide Data Validations & Final Form Submit
    const handleEventDataInput = (e) => {
        let ele         =   e.target.name;
        let ele_val     =   e.target.value;
        setEventData({...eventData, [ele] : ele_val});

        if(ele === 'eventName'){
            let isEventNameValid = ValidationFunctions.requiredValidation("Event Name",ele_val,false);

            if(isEventNameValid !== 'valid'){
                updateEventNameErr({...eventNameErr, err_mssg: isEventNameValid, isValid: "invalid"})
            }else{
                updateEventNameErr({...eventNameErr, err_mssg: isEventNameValid, isValid: "valid"})
            }
        }else if(ele === 'eventDate'){
            let end_d   = (1000*60*60*24*30*12*2);    //2 years
            let start_d = (1000*60*60*24*1);         //1 days
            let isBookingDateValid = ValidationFunctions.futureDateValidation("Event Date",ele_val,start_d,end_d,false);

            if(isBookingDateValid !== 'valid'){
                updateEventDateErr({...eventDateErr, err_mssg: isBookingDateValid, isValid: "invalid"})
            }else{
                updateEventDateErr({...eventDateErr, err_mssg: isBookingDateValid, isValid: "valid"})

            }
        }else if(ele === 'serviceType'){
            let isServieTypeValid = ValidationFunctions.requiredValidation("Service Type",ele_val,false);

            if(isServieTypeValid !== 'valid'){
                updateServiceTypeErr({...serviceTypeErr, err_mssg: isServieTypeValid, isValid: "invalid"})
            }else{
                updateServiceTypeErr({...serviceTypeErr, err_mssg: isServieTypeValid, isValid: "valid"})

            }
        }else if(ele === 'state'){
            let isStateValid = ValidationFunctions.requiredValidation("State",ele_val,false);

            if(isStateValid !== 'valid'){
                updateEventStateErr({...eventStateErr, err_mssg: isStateValid, isValid: "invalid"})
            }else{
                updateEventStateErr({...eventStateErr, err_mssg: isStateValid, isValid: "valid"});
            }
        }else if(ele === 'district'){
            let isDistrictValid = ValidationFunctions.requiredValidation("District",ele_val,false);

            if(isDistrictValid !== 'valid'){
                updateEventDistrictErr({...eventDistrictErr, err_mssg: isDistrictValid, isValid: "invalid"})
            }else{
                updateEventDistrictErr({...eventDistrictErr, err_mssg: isDistrictValid, isValid: "valid"})

            }
        }else if(ele === 'city'){
            let isCityValid = ValidationFunctions.cityValidation('City',ele_val,true);

            if(isCityValid !== 'valid'){
                updateEventCityErr({...eventCityErr, err_mssg: isCityValid, isValid: "invalid"})
            }else{
                updateEventCityErr({...eventCityErr, err_mssg: isCityValid, isValid: "valid"})

            }
        }else if(ele === 'pinCode'){
            let isPinCodeValid = ValidationFunctions.pinCodeValidation('Pin Code',ele_val,true);

            if(isPinCodeValid !== 'valid'){
                updateEventPinCodeErr({...eventPinCodeErr, err_mssg: isPinCodeValid, isValid: "invalid"})
            }else{
                updateEventPinCodeErr({...eventPinCodeErr, err_mssg: isPinCodeValid, isValid: "valid"})

            }
        }
    }

    const [mealMenuInputs, setMealMenuInputs] = useState([
        { 
            mealType: '',
            totalPlateCount:'0',
            vegPlateCount:'0',
            servingType:['serving'],
            foodMenu:[],
            liveCounters:[],
            userNote:''
        }
    ]);

    const mealMenuAddChange = (e,i) => {
        e.preventDefault();
        let mealMenuInputValid = checkMealMenuValidation();
        if(mealMenuInputValid === true){
            setMealMenuInputs([...mealMenuInputs, { mealType: '', totalPlateCount:'0', vegPlateCount:'0', servingType:['serving'], foodMenu:[], liveCounters:[], userNote:''}]);
        }
    };

    const handlemealMenuInputChange = (event, index, field) => {
        if(field === 'liveCounters'){
            // let new_arr = event.map((item) => item.value);  // Pick only value from the selected items
            const updateArr = mealMenuInputs.map((data,i) =>
                i === index ? 
                { 
                    ...data, liveCounters: event 
                } : 
                data
            );
            setMealMenuInputs(updateArr);
        }else if(field === 'foodMenu'){
            // let new_arr = event.map((item) => item.value);  // Pick only value from the selected items
            const updateArr = mealMenuInputs.map((data,i) =>
                i === index ? 
                { 
                    ...data, foodMenu: event 
                } : 
                data
            );
            setMealMenuInputs(updateArr);
        }else if(field === 'servingType'){
            const { value, checked } = event.target;
            let onChangeValue = [...mealMenuInputs];
            let includedServingType = onChangeValue[index].servingType

            if(checked){
                const updateArr = mealMenuInputs.map((data,i) =>
                    i === index ? 
                    { 
                        ...data, servingType : [...includedServingType, value]
                    } : 
                    data
                );
                setMealMenuInputs(updateArr);
            }else{
                const updated_list = includedServingType.filter(item => item !== value)
                const updateArr = mealMenuInputs.map((data,i) =>
                    i === index ? 
                    { 
                        ...data, servingType : updated_list,
                    } : 
                    data
                );
                setMealMenuInputs(updateArr);
            }
        }else{
            let { name, value } = event.target;
            let onChangeValue   = [...mealMenuInputs];
            if(name === 'totalPlateCount'){
                let isPlateCountValid = ValidationFunctions.numberValidation('Total Plate Count',value,true);
                if(isPlateCountValid === 'valid'){
                    onChangeValue[index][name] = value;
                    setMealMenuInputs(onChangeValue);
                }
            }else if(name === 'mealType'){
                let checkValueExists = checkExistingMealType(value);
                if(checkValueExists === true){
                    Swal.fire(
                        {
                            title: "Failed!",
                            text: "You have already added "+value+". Please Select a different Meal Type",
                            icon: "error"
                        }
                    )
                }else{
                    let isPlateCountValid = ValidationFunctions.requiredValidation('Meal Type',value,true);
                    if(isPlateCountValid === 'valid'){
                        onChangeValue[index][name] = value;
                        setMealMenuInputs(onChangeValue);
                    }
                }
            }else if(name === 'vegPlateCount'){
                let isVegPlateCountValid = ValidationFunctions.numberValidation('Total Plate Count',value,true);
                if(isVegPlateCountValid === 'valid'){
                    let totalCountFieldVal = onChangeValue[index]['totalPlateCount'];
                    if(parseInt(value) <= parseInt(totalCountFieldVal)){
                            onChangeValue[index][name] = value;
                            setMealMenuInputs(onChangeValue);
                    }else if(value === ''){
                        onChangeValue[index][name] = value;
                        setMealMenuInputs(onChangeValue);
                    }
                }
            }else{
                onChangeValue[index][name] = value;
                setMealMenuInputs(onChangeValue);
            }
        }
    };

    const mealMenuDeleteChange = (event,index) => {
        event.preventDefault();
        const newArray = [...mealMenuInputs];
        newArray.splice(index, 1);
        setMealMenuInputs(newArray);
    };

    function checkExistingMealType(val){
        if(mealMenuInputs.length>0){
            for(var k=0; k<mealMenuInputs.length; k++){
                if(mealMenuInputs[k].mealType === val){
                    return true
                }
            }
        }
        return false
    }

    let mealMenuData = [...mealMenuInputs];

    const onSubmitValidation = (data) => {
        const end_d   = (1000*60*60*24*30*12*2);    //2 years
        const start_d = (1000*60*60*24*1);         //1 days

        let isEventNameValid = ValidationFunctions.requiredValidation("Event Name",data.eventName,false);
        if(isEventNameValid !== 'valid'){
            updateEventNameErr({...eventNameErr, err_mssg: isEventNameValid, isValid: "invalid"})
        }else{
            updateEventNameErr({...eventNameErr, err_mssg: isEventNameValid, isValid: "valid"})
        }

        let isEventDateValid = ValidationFunctions.futureDateValidation("Event Date",data.eventDate,start_d,end_d,false);
        if(isEventDateValid !== 'valid'){
            updateEventDateErr({...eventDateErr, err_mssg: isEventDateValid, isValid: "invalid"})
        }else{
            updateEventDateErr({...eventDateErr, err_mssg: isEventDateValid, isValid: "valid"})

        }

        let isServiceTypeValid = ValidationFunctions.requiredValidation("Service Type",data.serviceType,false);
        if(isServiceTypeValid !== 'valid'){
            updateServiceTypeErr({...serviceTypeErr, err_mssg: isServiceTypeValid, isValid: "invalid"})
        }else{
            updateServiceTypeErr({...serviceTypeErr, err_mssg: isServiceTypeValid, isValid: "valid"})
        }

        let isStateValid = ValidationFunctions.requiredValidation("State",data.state,false);
        if(isStateValid !== 'valid'){
            updateEventStateErr({...eventStateErr, err_mssg: isStateValid, isValid: "invalid"})
        }else{
            updateEventStateErr({...eventStateErr, err_mssg: isStateValid, isValid: "valid"});
        }
        
        let isDistrictValid = ValidationFunctions.requiredValidation("District",data.district,false);
        if(isDistrictValid !== 'valid'){
            updateEventDistrictErr({...eventDistrictErr, err_mssg: isDistrictValid, isValid: "invalid"})
        }else{
            updateEventDistrictErr({...eventDistrictErr, err_mssg: isDistrictValid, isValid: "valid"})

        }

        let isCityValid = ValidationFunctions.cityValidation('City',data.city,false);
        if(isCityValid !== 'valid'){
            updateEventCityErr({...eventCityErr, err_mssg: isCityValid, isValid: "invalid"})
        }else{
            updateEventCityErr({...eventCityErr, err_mssg: isCityValid, isValid: "valid"})
        }
    
        let isPinCodeValid = ValidationFunctions.pinCodeValidation('Pin Code',data.pinCode,false);
        if(isPinCodeValid !== 'valid'){
            updateEventPinCodeErr({...eventPinCodeErr, err_mssg: isPinCodeValid, isValid: "invalid"})
        }else{
            updateEventPinCodeErr({...eventPinCodeErr, err_mssg: isPinCodeValid, isValid: "valid"})

        }

        // let mealMenuInputValid = checkMealMenuValidation()

        if(isEventNameValid === 'valid' && isEventDateValid === 'valid' && isServiceTypeValid === 'valid' && isStateValid === 'valid' && isDistrictValid === 'valid' && isCityValid==='valid' && isPinCodeValid==='valid' && (mealMenuInputs.length>0)){
            let mealMenuInputValid = checkMealMenuValidation()
            if(mealMenuInputValid === true){
                return true
            }
        }else{
            return false
        }
    }

    function checkMealMenuValidation(){
        for(var i=0; i<mealMenuInputs.length; i++){
            if(mealMenuInputs[i]['mealType'] === ''){
                Swal.fire(
                    {
                        title: "Failed!",
                        text: "Please add Meal Type",
                        icon: "error"
                    }
                )
                return false;
            }else if((mealMenuInputs[i]['totalPlateCount']) === '' || parseInt(mealMenuInputs[i]['totalPlateCount']) < 10){
                Swal.fire(
                    {
                        title: "Failed!",
                        text: "Total Plate Count should be minimum 10 in "+mealMenuInputs[i]['mealType'],
                        icon: "error"
                    }
                )
                return false;
            }else if(((mealMenuInputs[i]['totalPlateCount']) !== '' && (mealMenuInputs[i]['vegPlateCount']) !== '') && parseInt(mealMenuInputs[i]['totalPlateCount']) < parseInt(mealMenuInputs[i]['vegPlateCount'])){
                Swal.fire(
                    {
                        title: "Failed!",
                        text: "Veg Plate Count should be less than or equals to Total Plate count in "+mealMenuInputs[i]['mealType'],
                        icon: "error"
                    }
                )
                return false
            }else if(mealMenuInputs[i]['servingType'].length <= 0){
                Swal.fire(
                    {
                        title: "Failed!",
                        text: "You need to add serving type in "+mealMenuInputs[i]['mealType'],
                        icon: "error"
                    }
                )
                return false;
            }else if(mealMenuInputs[i]['foodMenu'].length <= 0){
                Swal.fire(
                    {
                        title: "Failed!",
                        text: "At least one food should be added in menu in "+mealMenuInputs[i]['mealType'],
                        icon: "error"
                    }
                )
                return false;
            }
        }
        return true
    }

    const placeBooking          = async() =>{
        setLoadingMssg("Please wait !! submitting form...");
        setMsgStyle("");
        const formData          = {
            first_name          : newUserData.firstName,
            last_name           : newUserData.lastName,
            email               : newUserData.emailId,
            phone_no            : parseInt(newUserData.phoneNum),
            user_address        : {
                state           : newUserData.userState,
                district        : newUserData.userDistrict,
                city            : newUserData.userCity,
                pincode         : parseInt(newUserData.userPinCode)
            },
            event_name          : eventData.eventName,
            event_date          : eventData.eventDate,
            preffered_package   : eventData.prefferedPackage,
            service_type        : eventData.serviceType,
            event_location      : {
                state           : eventData.state,
                district        : eventData.district,
                city            : eventData.city,
                pincode         : parseInt(eventData.pinCode),
                landmark        : parseInt(eventData.eventLandmark)
            },
            meal_menu           : mealMenuInputs
        };

        const config = {
            headers: { 'Content-Type': 'application/json'}
        }

        try {
            const response = await axios.post(bookingApiUrl, formData, {config})
            if(response.data.success === true){
                setLoadingMssg("");
                Swal.fire(
                    {
                        title: "Success!",
                        text: "Booked Successfully!! You will get a response from us in sometimes.",
                        icon: "success",
                        // closeOnClickOutside: false,
                        allowOutsideClick: false,
                        allowEscapeKey: false
                    }
                ).then(
                    (result) =>{
                        if (result.isConfirmed) {
                            window.location.href = window.location.origin;;
                        }
                    }
                )
            }else{
                setLoadingMssg("");
                Swal.fire(
                    {
                        title: "Booking Failed!",
                        text: "Something went wrong. Please try after sometimes...",
                        icon: "error"
                    }
                )
            }
        }
        catch (error) {
            if (error.response) {       // Request made but the server responded with an error
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {     // Request made but no response is received from the server.
                console.log(error.request);
            } else {        // Error occured while setting up the request
                console.log('Error', error.message);
            }
        }
    }
    const bookingFormSubmit = (e) => {
        e.preventDefault();
        let validationFlag  = onSubmitValidation(eventData);
        setLoadingMssg("");
        if(validationFlag){
            Swal.fire({
                title: 'Confirm to Complete Booking',
                showConfirmButton: true,
                showCancelButton: true,
                confirmButtonText: "OK",
                cancelButtonText: "Cancel",
                icon: 'warning'
            }
            ).then((result) => {
                if (result.isConfirmed) {
                    placeBooking()
                } else{
                    Swal.close();
                }
            })

        }else{
            // console.log("Invalid Form Fields");
        }
    }

    function goToPrevSlide(){
        document.querySelector("button.carousel-prev-btn").click();
    }


    return(
        <div className="booking-modal" id="bookingModal" show-modal={showBookingModal}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Booking Form</h1>
                        <button type="button" className="login-modal-close" onClick={closeBookingModal}>X</button>
                    </div>
                    <div className="modal-body" style={{display:"flex", justifyContent:"center", padding:"24px 14px"}}>
                        <form className="needs-validation book-now-form" id="bookNowForm" onSubmit={bookingFormSubmit}>
                            <div id="carouselExample" className="carousel slide" data-bs-touch="false">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" style={{padding:"0px 10px"}}>
                                        <div className="row">
                                            <div className="col-sm-12 event-form-heading mt-3" style={{textAlign:"left", padding:"5px 10px 10px 10px"}}>
                                                <h5 className="mb-0">
                                                    <span className="h-txt" style={{minWidth:"126px"}}>Basic Details</span>
                                                    <span className="hr-line"></span>
                                                </h5>
                                            </div>
                                            <div className="col-md-6 col-sm-12 new-form-field mb-3">
                                                <label htmlFor="firstName" className="form-label">First Name<span style={{color:"red"}}>*</span></label>
                                                <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Enter your first name..." value={newUserData.firstName} onChange={(e)=>handlenewUserInput(e)} form-valid={firstNameErr.isValid}/>
                                                {
                                                    (firstNameErr.err_mssg !== 'valid')?
                                                    <div className="invalid-feedback">
                                                        {firstNameErr.err_mssg}
                                                    </div>
                                                    :
                                                    <div className="valid-feedback">
                                                        {firstNameErr.err_mssg}
                                                    </div>
                                                }
                                            </div>
                                            <div className="col-md-6 col-sm-12 new-form-field mb-3">
                                                <label htmlFor="lastName" className="form-label">Last Name<span style={{color:"red"}}>*</span></label>
                                                <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Enter your last name..." value={newUserData.lastName} onChange={(e)=>handlenewUserInput(e)} form-valid={lastNameErr.isValid}/>
                                                {
                                                    (lastNameErr.err_mssg !== 'valid')?
                                                    <div className="invalid-feedback">
                                                        {lastNameErr.err_mssg}
                                                    </div>
                                                    :
                                                    <div className="valid-feedback">
                                                        {lastNameErr.err_mssg}
                                                    </div>
                                                }
                                            </div>
                                            <div className="col-md-6 col-sm-12 new-form-field mb-3" style={{position:"relative"}}>
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
                                            <div className="col-md-6 col-sm-12 new-form-field mb-3">
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
                                            <div className="col-sm-12 event-form-heading mt-3" style={{textAlign:"left", padding:"5px 10px 10px 10px"}}>
                                                <h5 className="mb-0">
                                                    <span className="h-txt" style={{minWidth:"130px"}}>Your Address</span>
                                                    <span className="hr-line"></span>
                                                </h5>
                                            </div>
                                            <div className="col-md-6 col-sm-12 new-form-field mb-3">
                                                <label htmlFor="userState" className="form-label">State<span style={{color:"red"}}>*</span></label>
                                                <select className="form-select address-select" id="userState" name="userState" value={newUserData.userState} onChange={(e)=>handlenewUserInput(e)} form-valid={userStateErr.isValid} select-color={newUserData.userDistrict === ''?'novalue':'withvalue'}>
                                                    <option value="" disabled>Choose your state</option>
                                                    {
                                                        Constant_Variables.states_districts.map((data,index)=>{
                                                            return(
                                                                <option value={data.state} key={index}>{data.state}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                                {
                                                    (userStateErr.err_mssg !== 'valid')?
                                                    <div className="invalid-feedback">
                                                        {userStateErr.err_mssg}
                                                    </div>
                                                    :
                                                    <div className="valid-feedback">
                                                        {userStateErr.err_mssg}
                                                    </div>
                                                }
                                            </div>
                                            <div className="col-md-6 col-sm-12 new-form-field mb-3">
                                                <label htmlFor="userDistrict" className="form-label">District<span style={{color:"red"}}>*</span></label>
                                                <select className="form-select address-select" id="userDistrict" name="userDistrict" value={newUserData.userDistrict} onChange={(e)=>handlenewUserInput(e)} form-valid={userDistrictErr.isValid} select-color={newUserData.userDistrict === ''?'novalue':'withvalue'}>
                                                <option value="" disabled>Choose your district</option>
                                                    {
                                                        Constant_Variables.states_districts.map((data,index)=>
                                                        (data.state === newUserData.userState)?
                                                        data.districts.map((d,i)=>{
                                                            return(
                                                                <option value={d} key={i}>{d}</option>
                                                            )
                                                        })
                                                        :
                                                        <></>
                                                        )
                                                    }
                                                </select>
                                                {
                                                    (userDistrictErr.err_mssg !== 'valid')?
                                                    <div className="invalid-feedback">
                                                        {userDistrictErr.err_mssg}
                                                    </div>
                                                    :
                                                    <div className="valid-feedback">
                                                        {userDistrictErr.err_mssg}
                                                    </div>
                                                }
                                            </div>
                                            <div className="col-md-6 col-sm-12 new-form-field mb-3">
                                                <label htmlFor="userCity" className="form-label">City/Village<span style={{color:"red"}}>*</span></label>
                                                <input type="text" className="form-control" id="userCity" name="userCity" placeholder="Enter your city/village" value={newUserData.userCity} onChange={(e)=>handlenewUserInput(e)} form-valid={userCityErr.isValid}/>
                                                {
                                                    (userCityErr.err_mssg !== 'valid')?
                                                    <div className="invalid-feedback">
                                                        {userCityErr.err_mssg}
                                                    </div>
                                                    :
                                                    <div className="valid-feedback">
                                                        {userCityErr.err_mssg}
                                                    </div>
                                                }
                                            </div>
                                            <div className="col-md-6 col-sm-12 new-form-field mb-3">
                                                <label htmlFor="userPinCode" className="form-label">Pin code<span style={{color:"red"}}>*</span></label>
                                                <input type="text" className="form-control" id="userPinCode" name="userPinCode" placeholder="Enter your Pin code" maxLength={6} value={newUserData.userPinCode} onChange={(e)=>handlenewUserInput(e)} form-valid={userPinCodeErr.isValid}/>
                                                {
                                                    (userPinCodeErr.err_mssg !== 'valid')?
                                                    <div className="invalid-feedback">
                                                        {userPinCodeErr.err_mssg}
                                                    </div>
                                                    :
                                                    <div className="valid-feedback">
                                                        {userPinCodeErr.err_mssg}
                                                    </div>
                                                }
                                            </div>
                                            <div className="col-sm-12 mt-3 mb-2">
                                                <button className="btn btn-primary" type="button" onClick={goToNextSlide} style={{minWidth:"120px"}}>
                                                    <span>Next</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" style={{padding:"0px 10px"}}>
                                        <div className="row">
                                            <div className="col-sm-12 mb-3"  style={{display:"flex", flexDirection:"row", justifyContent:"right", alignItems:"center", gap:"6px"}}>
                                                <i className="fa fa-long-arrow-left" style={{fontSize:"20px"}}></i>
                                                <button className="btn btn-dark" type="button" onClick={goToPrevSlide} style={{minWidth:"90px", padding: "0px", lineHeight:"1.5", fontFamily: 'Proxima Soft Semibold'}}>
                                                    Go Back
                                                </button>
                                            </div>
                                            <div className="col-sm-12 event-form-heading" style={{textAlign:"left", padding:"5px 10px 10px 10px"}}>
                                                <h5 className="mb-0">
                                                    <span className="h-txt" style={{minWidth:"132px"}}>Event Details</span>
                                                    <span className="hr-line"></span>
                                                </h5>
                                            </div>
                                            <div className="col-md-6 col-sm-12 new-form-field mb-3">
                                                <label htmlFor="eventName" className="form-label">Event Name<span style={{color:"red"}}>*</span></label>
                                                <select className="form-select" id="eventName" name="eventName" value={eventData.eventName} onChange={(e)=>handleEventDataInput(e)} form-valid={eventNameErr.isValid} select-color={eventData.eventName === ''?'novalue':'withvalue'}>
                                                    <option value="" disabled>Choose your Event</option>
                                                    {
                                                        Constant_Variables.event_Name.map((data,index)=>{
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
                                            <div className="col-md-6 col-sm-12 new-form-field mb-3">
                                                <label htmlFor="eventDate" className="form-label">Event Date<span style={{color:"red"}}>*</span></label>
                                                <input type="date" className="form-control" id="eventDate" name="eventDate" min={bookingStartDate} max={bookingEndDate} onChange={(e)=>handleEventDataInput(e)} form-valid={eventDateErr.isValid} select-color={eventData.eventDate === ''?'novalue':'withvalue'} maxLength={10}/>
                                                {
                                                    (eventDateErr.err_mssg !== 'valid')?
                                                    <div className="invalid-feedback">
                                                        {eventDateErr.err_mssg}
                                                    </div>
                                                    :
                                                    <div className="valid-feedback">
                                                        {eventDateErr.err_mssg}
                                                    </div>
                                                }
                                            </div>
                                            <div className="col-md-6 col-sm-12 new-form-field mb-3">
                                                <label htmlFor="prefferedPackage" className="form-label">Preffered Package</label>
                                                <select className="form-select" id="prefferedPackage" name="prefferedPackage" onChange={(e)=>handleEventDataInput(e)} value={eventData.prefferedPackage}>
                                                    <option disabled value="">Select your preffered package</option>
                                                    {
                                                        (packageDetails.length>0)?
                                                        <>
                                                            {
                                                                packageDetails.map((data,index)=>{
                                                                    return(
                                                                        <option value={data.package_name} key={index}>{data.package_name}</option>
                                                                    )
                                                                })
                                                            }
                                                        </>
                                                        :
                                                        <></>
                                                    }
                                                    <option value="customize">Customize</option>
                                                </select>
                                                {/* {
                                                    (prefferedPackageErr.err_mssg !== 'valid')?
                                                    <div className="invalid-feedback">
                                                        {prefferedPackageErr.err_mssg}
                                                    </div>
                                                    :
                                                    <div className="valid-feedback">
                                                        {prefferedPackageErr.err_mssg}
                                                    </div>
                                                } */}
                                            </div>
                                            <div className="col-md-6 col-sm-12 new-form-field mb-3">
                                                <label htmlFor="serviceType" className="form-label">Service Type<span style={{color:"red"}}>*</span></label>
                                                <select className="form-select" id="serviceType" name="serviceType" onChange={(e)=>handleEventDataInput(e)} form-valid={serviceTypeErr.isValid} value={eventData.serviceType} select-color={eventData.serviceType === ''?'novalue':'withvalue'}>
                                                    <option disabled value="">Select your service type</option>
                                                    <option value="cooking and serving">Cooking & Serving</option>
                                                    <option value="cooking and delivery">Cooking & Delivery</option>
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
                                            <br></br>
                                            <div className="col-sm-12 event-form-heading mt-3" style={{textAlign:"left", padding:"5px 10px 10px 10px"}}>
                                                <h5 className="mb-0">
                                                    <span className="h-txt" style={{minWidth:"140px"}}>Meals & Menu</span>
                                                    <span className="hr-line"></span>
                                                </h5>
                                            </div>
                                            <div className="meal-menu-wrap">
                                                <CreateableFormSection mealMenuInputs={mealMenuData} handlemealMenuInputChange={handlemealMenuInputChange} mealMenuAddChange={mealMenuAddChange} mealMenuDeleteChange={mealMenuDeleteChange}/>
                                            </div>
                                            <br></br>
                                            <div className="col-sm-12 event-form-heading mt-3" style={{textAlign:"left", padding:"20px 10px 10px 10px"}}>
                                                <h5 className="mb-0">
                                                    <span className="h-txt" style={{minWidth:"142px"}}>Event Location</span>
                                                    <span className="hr-line"></span>
                                                </h5>
                                            </div>
                                            <div className="col-md-6 col-sm-12 new-form-field mb-3">
                                                <label htmlFor="state" className="form-label">State<span style={{color:"red"}}>*</span></label>
                                                <select className="form-select address-select" id="state" name="state" value={eventData.state} onChange={(e)=>handleEventDataInput(e)} form-valid={eventStateErr.isValid} select-color={eventData.state === ''?'novalue':'withvalue'}>
                                                    <option value="" disabled>Choose your state</option>
                                                    {
                                                        Constant_Variables.states_districts.map((data,index)=>{
                                                            return(
                                                                <>
                                                                    {
                                                                        (data.state === 'West Bengal')?
                                                                        <option value={data.state} key={index}>{data.state}</option>
                                                                        :
                                                                        <></>
                                                                    }
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </select>
                                                {
                                                    (eventStateErr.err_mssg !== 'valid')?
                                                    <div className="invalid-feedback">
                                                        {eventStateErr.err_mssg}
                                                    </div>
                                                    :
                                                    <div className="valid-feedback">
                                                        {eventStateErr.err_mssg}
                                                    </div>
                                                }
                                            </div>
                                            <div className="col-md-6 col-sm-12 new-form-field mb-3">
                                                <label htmlFor="district" className="form-label">District<span style={{color:"red"}}>*</span></label>
                                                <select className="form-select address-select" id="district" name="district" value={eventData.district} onChange={(e)=>handleEventDataInput(e)} form-valid={eventDistrictErr.isValid} select-color={eventData.district === ''?'novalue':'withvalue'}>
                                                <option value="" disabled>Choose your district</option>
                                                    {
                                                        Constant_Variables.states_districts.map((data,index)=>
                                                        (data.state === eventData.state)?
                                                        data.districts.map((d,i)=>{
                                                            return(
                                                                <option value={d} key={i}>{d}</option>
                                                            )
                                                        })
                                                        :
                                                        <></>
                                                        )
                                                    }
                                                </select>
                                                {
                                                    (eventDistrictErr.err_mssg !== 'valid')?
                                                    <div className="invalid-feedback">
                                                        {eventDistrictErr.err_mssg}
                                                    </div>
                                                    :
                                                    <div className="valid-feedback">
                                                        {eventDistrictErr.err_mssg}
                                                    </div>
                                                }
                                            </div>
                                            <div className="col-md-6 col-sm-12 new-form-field mb-3">
                                                <label htmlFor="city" className="form-label">City<span style={{color:"red"}}>*</span></label>
                                                <input type="text" className="form-control" id="city" name="city" placeholder="Enter your city" value={eventData.city} onChange={(e)=>handleEventDataInput(e)} form-valid={eventCityErr.isValid}/>
                                                {
                                                    (eventCityErr.err_mssg !== 'valid')?
                                                    <div className="invalid-feedback">
                                                        {eventCityErr.err_mssg}
                                                    </div>
                                                    :
                                                    <div className="valid-feedback">
                                                        {eventCityErr.err_mssg}
                                                    </div>
                                                }
                                            </div>
                                            <div className="col-md-6 col-sm-12 new-form-field mb-3">
                                                <label htmlFor="pinCode" className="form-label">Pin code<span style={{color:"red"}}>*</span></label>
                                                <input type="text" className="form-control" id="pinCode" name="pinCode" placeholder="Enter your Pin code" maxLength={6} value={eventData.pinCode} onChange={(e)=>handleEventDataInput(e)} form-valid={eventPinCodeErr.isValid}/>
                                                {
                                                    (eventPinCodeErr.err_mssg !== 'valid')?
                                                    <div className="invalid-feedback">
                                                        {eventPinCodeErr.err_mssg}
                                                    </div>
                                                    :
                                                    <div className="valid-feedback">
                                                        {eventPinCodeErr.err_mssg}
                                                    </div>
                                                }
                                            </div>
                                            <div className="col-md-6 col-sm-12 new-form-field event-landmark-field mb-3">
                                                <label htmlFor="eventLandmark" className="form-label">Landmark</label>
                                                <textarea name="eventLandmark" id="eventLandmark" placeholder="Enter your event location/address..." value={eventData.eventLandmark} onChange={(e)=>handleEventDataInput(e)}></textarea>
                                            </div>
                                            <div className="col-sm-12 mb-2 mt-4"  style={{display:"flex", flexDirection:"row", justifyContent:"center", gap:"10px"}}>
                                                {/* <button className="btn btn-primary" type="button" onClick={goToPrevSlide} style={{minWidth:"100px"}}>
                                                    <span>Go Back</span>
                                                </button> */}
                                                <button className="btn btn-primary new-user-form-submit" type="submit">Submit Booking</button>
                                            </div>
                                            <p style={(msgStyle === 'error')? {color:"red"}:{color:"black"}}>{loadingMssg}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button className="carousel-prev-btn visually-hidden" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span>Previous</span>
                        </button>
                        <button className="carousel-next-btn visually-hidden" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span>Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
     )
}