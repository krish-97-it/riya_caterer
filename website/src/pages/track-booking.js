import React,{useState, useEffect} from "react";
import Loading from "../component/page-loading";
import Constant_Variables from "../controller/constant-variables";
import ValidationFunctions from "../controller/validation";
import Swal from "sweetalert2";
import axios from "axios";

const TrackBooking = () => {
     // Set loading state to true initially
    const [isLoading, setLoading] = useState(true);

    // Page will load after 2 seconds
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);


    const APIUrls                                   =   {
        "getBookingData"     : Constant_Variables.SERVER_BASE_URL+'/getBookingData'
    };

    //search form input data management
    const [searchData, setSearchData] = useState({
        firstName: '',
        lastName: '',
        phoneNum: '',
        bookId: '',
        eventDate: '',
    });

    const [firstNameErr, updateFirstNameErr]                = useState({});
    const [lastNameErr, updateLastNameErr]                  = useState({});
    const [phoneNumErr, updatePhoneNumErr]                  = useState({});

    function handleSearchInput(e){
        let ele         =   e.target.name;
        let ele_val     =   e.target.value;

        setSearchData({...searchData, [ele] : ele_val});

        if(ele === 'firstName'){
            let isfirstNameValid = ValidationFunctions.nameValidation("First Name",ele_val,true);

            if(isfirstNameValid !== 'valid'){
                updateFirstNameErr({...firstNameErr, err_mssg: isfirstNameValid, isValid: "invalid"})
            }else{
                updateFirstNameErr({...firstNameErr, err_mssg: isfirstNameValid, isValid: "optional"})
            }
        }else if(ele === 'lastName'){
            let isLastNameValid = ValidationFunctions.nameValidation("Last Name",ele_val,true);

            if(isLastNameValid !== 'valid'){
                updateLastNameErr({...lastNameErr, err_mssg: isLastNameValid, isValid: "invalid"})
            }else{
                updateLastNameErr({...lastNameErr, err_mssg: isLastNameValid, isValid: "optional"})
            }
        }else if(ele === 'phoneNum'){
            let isPhoneNumValid = ValidationFunctions.phoneValidation("Phone No.",ele_val,true);

            if(isPhoneNumValid !== 'valid'){
                updatePhoneNumErr({...phoneNumErr, err_mssg: isPhoneNumValid, isValid: "invalid"})
            }else{
                updatePhoneNumErr({...phoneNumErr, err_mssg: isPhoneNumValid, isValid: "optional"})

            }
        }
    }

    function onSubmitValidation(data){
        if(data.bookId === '' && (data.firstName === '' || data.lastName === '' || data.phoneNum === '')){
            Swal.fire(
                {
                    title: "Error!",
                    text: "Please add either booking id or name and phone number",
                    icon: "error"
                }
            )
            return false;
        }else if(data.bookId === ''){
            let isfirstNameValid = ValidationFunctions.nameValidation("First Name",data.firstName,true);
            if(isfirstNameValid !== 'valid'){
                updateFirstNameErr({...firstNameErr, err_mssg: isfirstNameValid, isValid: "invalid"})
            }else{
                updateFirstNameErr({...firstNameErr, err_mssg: isfirstNameValid, isValid: "optional"})
            }

            let isLastNameValid = ValidationFunctions.nameValidation("Last Name",data.lastName,true);
            if(isLastNameValid !== 'valid'){
                updateLastNameErr({...lastNameErr, err_mssg: isLastNameValid, isValid: "invalid"})
            }else{
                updateLastNameErr({...lastNameErr, err_mssg: isLastNameValid, isValid: "optional"})
            }

            let isPhoneNumValid = ValidationFunctions.phoneValidation("Phone No.",data.phoneNum,true);
            if(isPhoneNumValid !== 'valid'){
                updatePhoneNumErr({...phoneNumErr, err_mssg: isPhoneNumValid, isValid: "invalid"})
            }else{
                updatePhoneNumErr({...phoneNumErr, err_mssg: isPhoneNumValid, isValid: "optional"})

            }

            if(isfirstNameValid === 'valid' && isLastNameValid === 'valid' && isPhoneNumValid === 'valid'){
                return true
            }else{
                return false
            }
        }else{
            return true
        }
        
    }

    async function searchBooking(e){
        e.preventDefault();
        let validationFlag = onSubmitValidation(searchData);
        if(validationFlag){
            // setLoadingMssg("Please wait !! submitting form...");
            const formData  = {
                firstName: searchData.firstName,
                firstName: searchData.lastName,
                phoneNum: parseInt(searchData.phoneNum),
                bookId: searchData.bookId,
                eventDate : searchData.eventDate,
            };
            const formDataJsonString    =   JSON.stringify(formData);

            const config = {
                        headers: { 'Content-Type': 'application/json'}
                    }
            
                    try {
                        const response = await axios.post(APIUrls.getBookingData, formData, {config});
                        console.log(response.data.data);
                        if(response.data.message === 'success'){
                            // setLoadingMssg("");
                            Swal.fire(
                                {
                                    title: "Success!",
                                    text: "Record Found!!.",
                                    icon: "success",
                                    // closeOnClickOutside: false,
                                    allowOutsideClick: false,
                                    allowEscapeKey: false
                                }
                            )
                        }else{
                            // setLoadingMssg("");
                            Swal.fire(
                                {
                                    title: "Failed!",
                                    text: "No record found!!.",
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

        }else{
            console.log("Invalid Form Fields");
        }
    }

    return(
        <div className="app-body">
            <div className="main-content">
                {
                    isLoading ? (
                        <Loading />
                    ) : (
                        <div className="track-booking-page-body">
                            <div className="tracking-banner-section">
                                <div className="container">
                                    <img src="https://img.perceptpixel.com/pykhlszs/riya_caterer/tracking-booking-banner.webp" className="banner-img" style={{width:"100%", height:"auto"}} alt="order history"/>
                                </div>
                            </div>
                            <div className="search-input-box-section mt-4">
                                <div className="img-underline-heading">
                                    <h3>Send Us Your Query</h3>
                                    {/* <img src={BlackUnderline} alt="underline" className="img-underline"/> */}
                                </div>
                                <div className="search-form-wrap">
                                    <div className="container">
                                        <div className="search-booking-form-section">
                                            <form className="row g-3 needs-validation search-booking-form" id="contactUsForm" onSubmit={searchBooking}>
                                                <div className="col-sm-12 event-form-heading mt-4 pb-0 pt-2" style={{textAlign:"center"}}>
                                                    <h5 className="mb-0">
                                                        <span className="h-txt">Search By Booking Id</span>
                                                        {/* <span className="hr-line"></span> */}
                                                    </h5>
                                                </div>
                                                <div className="col-md-12 col-sm-12 new-form-field">
                                                    <label htmlFor="bookId" className="form-label">Booking Id<span style={{color:"red"}}>*</span></label>
                                                    <input type="text" className="form-control" id="bookId" name="bookId" placeholder="Enter booking id..." value={searchData.bookId} onChange={(e)=>handleSearchInput(e)}/>
                                                </div>
                                                <div className="col-sm-12 event-form-heading mt-4 pb-0 pt-2" style={{textAlign:"center"}}>
                                                    <h5 className="mb-0">
                                                        {/* <span className="h-txt">Search By Booking Id</span> */}
                                                        <span className="hr-line"></span>&nbsp;OR&nbsp;<span className="hr-line"></span>
                                                    </h5>
                                                </div>
                                                <div className="col-sm-12 event-form-heading mt-4 pb-0 pt-2" style={{textAlign:"center"}}>
                                                    <h5 className="mb-0">
                                                        <span className="h-txt">Search by Name & Phone no.</span>
                                                        {/* <span className="hr-line"></span> */}
                                                    </h5>
                                                </div>
                                                <div className="col-md-6 col-sm-12 new-form-field mb-3">
                                                        <label htmlFor="firstName" className="form-label">First Name<span style={{color:"red"}}>*</span></label>
                                                        <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Enter your first name..." value={searchData.firstName} onChange={(e)=>handleSearchInput(e)} form-valid={firstNameErr.isValid}/>
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
                                                        <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Enter your last name..." value={searchData.lastName} onChange={(e)=>handleSearchInput(e)} form-valid={lastNameErr.isValid}/>
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
                                                <div className="col-md-6 col-sm-12 new-form-field">
                                                    <label htmlFor="phoneNum" className="form-label">Phone no.<span style={{color:"red"}}>*</span></label>
                                                    <input type="tel" className="form-control" id="phoneNum" name="phoneNum" placeholder="Enter your Phone no..." value={searchData.phoneNum} onChange={(e)=>handleSearchInput(e)} form-valid={phoneNumErr.isValid} maxLength="10"/>
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
                                                <div className="col-md-6 col-sm-12 new-form-field mb-3">
                                                    <label htmlFor="eventDate" className="form-label">Event Date</label>
                                                    <input type="date" className="form-control" id="eventDate" name="eventDate" onChange={(e)=>handleSearchInput(e)} select-color={searchData.eventDate === ''?'novalue':'withvalue'}/>
                                                </div>
                                                <div className="col-sm-12 mt-4">
                                                    <button className="btn btn-primary search-booking-form-submit" type="submit">Search Booking</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="show-tracking-graph">
                                <ul>
                                    <li>
                                        <i className="icons awesome fa-solid fa-user"></i>
                                        <div className="step first">
                                            <p>1</p>
                                            <i className="awesome fa-solid fa-check"></i>
                                        </div>
                                        <p className="label">Profile</p>
                                    </li>
                                    <li>
                                        <i className="icons awesome fa-solid fa-coins"></i>
                                        <div className="step second">
                                            <p>2</p>
                                            <i className="awesome fa-solid fa-check"></i>
                                        </div>
                                        <p className="label">Finances</p>
                                    </li>
                                    <li>
                                        <i className="icons awesome fa-solid fa-house"></i>
                                        <div className="step third">
                                            <p>3</p>
                                            <i className="awesome fa-solid fa-check"></i>
                                        </div>
                                        <p className="label">Property</p>
                                    </li>
                                    <li>
                                        <i className="icons awesome fa-regular fa-star-half-stroke"></i>
                                        <div className="step fourth">
                                            <p>4</p>
                                            <i className="awesome fa-solid fa-check"></i>
                                        </div>
                                        <p className="label">Evaluation</p>
                                    </li>
                                    <li>
                                        <i className="icons awesome fa-solid fa-thumbs-up"></i>
                                        <div className="step fifth">
                                            <p>5</p>
                                            <i className="awesome fa-solid fa-check"></i>
                                        </div>
                                        <p className="label">Approval</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )

}

export default TrackBooking;