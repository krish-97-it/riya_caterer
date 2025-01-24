import React,{useState, useEffect, useRef} from "react";
import Loading from "../component/page-loading";
import Constant_Variables from "../controller/constant-variables";
import ValidationFunctions from "../controller/validation";
import Swal from "sweetalert2";
import axios from "axios";
import GoToTop from "../component/go-to-top";
import FaqSection from "../component/faq-accordion";

const TrackBooking = ({openBookingModal, openGuidelines}) => {
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
    // const [step, setSteps] = useState({
    //     fill_form :'active',
    //     discussion: '',
    //     advanced_payment: '',
    //     final_callback:'',
    //     event_day:'',
    //     feedback:''
    // })
    const [searchResult, updateSearchResult] = useState([]);
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

    const [isSubmit, setIsSubmit]                           = useState(false);

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
            setIsSubmit(true);
            const formData  = {
                firstName: searchData.firstName,
                lastName: searchData.lastName,
                phoneNum: parseInt(searchData.phoneNum),
                bookId: searchData.bookId,
                eventDate : searchData.eventDate,
            };

            const config = {
                        headers: { 'Content-Type': 'application/json'}
                    }
            
                    try {
                        const response = await axios.post(APIUrls.getBookingData, formData, {config});
                        if(response.data.success === true){
                            setIsSubmit(false);
                            let res_data = response.data.data
                            if(res_data.length >0){
                                updateSearchResult(res_data);
                                Swal.fire(
                                    {
                                        title: "Success!",
                                        text: response.data.message,
                                        icon: "success",
                                        // closeOnClickOutside: false,
                                        allowOutsideClick: false,
                                        allowEscapeKey: false
                                    }
                                )
                                const section = document.querySelector( '#resultsection' );
                                section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
                            }else{
                                updateSearchResult([]);
                                Swal.fire(
                                    {
                                        title: "",
                                        text: "No Record Found!!.",
                                        icon: "warning",
                                        // closeOnClickOutside: false,
                                        allowOutsideClick: false,
                                        allowEscapeKey: false
                                    }
                                )
                            }    
                        }else{
                            setIsSubmit(false);
                            updateSearchResult([]);
                            Swal.fire(
                                {
                                    title: "Failed!",
                                    text: response.data.message,
                                    icon: "warning"
                                }
                            )
                        }
                    }
                    catch (error) {
                        setIsSubmit(false);
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
            setIsSubmit(false);
            console.log("Invalid Form Fields");
        }
    }

    const filterCatItem     =   useRef();
    const catFilterScroll   =   (direction) => {
        sideScroll(filterCatItem.current,direction,20,140,10);
    }
    function sideScroll(element,direction,speed,distance,step){
        var scrollAmount    = 0;
        var slideTimer      = setInterval(function(){
            if(direction === 'left'){
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
            scrollAmount += step;
            if(scrollAmount >= distance){
                clearInterval(slideTimer);
            }
        }, speed);
    }

    function convertDate(date){
        let d               = new Date(date);
        // const month      = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        // const day        = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sturday"];

        // let month_Name   = month[d.getMonth()];
        // let day_Name     = day[d.getDay()];
        // let year         = d.getFullYear();
        let time            = d.toLocaleTimeString();
        let dateString      = d.toDateString();

        const date_time     = {
            date : dateString,
            time : time
        }

        return date_time
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
                                <div className="">
                                    <h3>Track Your Booking</h3>
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
                                                <div className="col-sm-12 mt-4" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                                    <button className="btn btn-primary new-user-form-submit" type="submit" disabled={(isSubmit === true)?true:false} style={{display:"flex", gap:"10px", justifyContent:"center", alignItems:"center"}}>
                                                        <i className="fa fa-spinner fa-spin" style={(isSubmit === true)?{display:"block"}:{display:"none"}}></i>
                                                        <span>{(isSubmit === true)?'Searching...':'Search Booking'}</span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Searh result section */}
                            <div className="search-result-section" id="resultsection">
                                {
                                    
                                    (searchResult.length > 0)?
                                    <>
                                        <div className="">
                                            <h3>Search Results</h3>
                                            {/* <img src={BlackUnderline} alt="underline" className="img-underline"/> */}
                                        </div>
                                        {
                                            searchResult.map((data,i)=>{
                                                return(
                                                    <div className="booking-data mt-4 pt-2 mb-5" key={i}>
                                                        <div className="container">
                                                            <div className="booking-id-section">
                                                                <p className="mb-0">Booking id: {data._id}</p>
                                                            </div>
                                                            <div className="basic-details">
                                                                <div className="accordion accordion-flush booking-data-accordion" id={"bookingDataAccordion"+i}>
                                                                    <div className="accordion-item">
                                                                        <h5 className="accordion-header">
                                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flushCollapse"+i} aria-expanded="" aria-controls={"flushCollapse"+i} style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:"15px"}}>
                                                                                <span style={{display:"flex", justifyContent:"left", alignItems:"center", gap:"5px", flexWrap:"wrap"}}>
                                                                                    <span>Event Date:</span>
                                                                                    <span>{data.event_date}</span>
                                                                                </span>
                                                                                <span style={{padding:"4px 8px", backgroundColor:"black", color:"white", fontSize:"16px", borderRadius:"6px", minWidth:"110px"}}>View Details</span>
                                                                            </button>
                                                                        </h5>
                                                                        <div id={"flushCollapse"+i} className="accordion-collapse collapse" data-bs-parent={"bookingDataAccordion"+i}>
                                                                            <div className="accordion-body">
                                                                                <div className="customer-details-section">
                                                                                    <p className="booked-on">
                                                                                        <span className="label">Booked On:</span>
                                                                                        <span>{convertDate((data.booking_date)).date}</span>
                                                                                        {/* &nbsp;<span>{convertDate((data.booking_date)).time}</span> */}
                                                                                    </p>
                                                                                    <p className="customer-name">
                                                                                        <span className="label">Customer Name:</span>
                                                                                        <span>{data.first_name+" "+data.last_name}</span>
                                                                                    </p>
                                                                                    <p className="contact-number">
                                                                                        <span className="label">Phone No.:</span> 
                                                                                        <span>{data.phone_no}</span>
                                                                                    </p>
                                                                                    <p className="contact-email"><span className="label">Email id:</span> <span>{data.email}</span></p>
                                                                                    <p className="contact-address"><span className="label">Address:</span> <span>{data.user_address[0].city}, {data.user_address[0].district}, {data.user_address[0].state}, {data.user_address[0].pincode}</span></p>
                                                                                </div>
                                                                                <div className="event-details-section">
                                                                                    <p className="event-name"><span className="label">Event Name:</span> <span>{data.event_name}</span></p>
                                                                                    <p className="event-date"><span className="label">Event Date:</span> <span>{convertDate(data.event_date).date}</span></p>
                                                                                    <p className="event-package"><span className="label">Preffered Package:</span> <span>{data.preffered_package}</span></p>
                                                                                    <p className="service-type"><span className="label">Service Type:</span> <span>{data.service_type}</span></p>
                                                                                    <p className="event-location"><span className="label">Event Location:</span> <span>{data.event_location[0].city}, {data.event_location[0].district}, {data.event_location[0].state}, {data.event_location[0].pincode} {(data.event_location[0].landmark)?', '+data.event_location[0].landmark:''}</span></p>
                                                                                </div>
                                                                                <div className="event-menu-details-section">
                                                                                    {
                                                                                        (data.meal_menu).map((meal,index)=>{
                                                                                            return(
                                                                                                <>
                                                                                                    <div className="event-form-heading mt-4 mb-2" style={{textAlign:"left"}}>
                                                                                                        <h5 className="mb-0">
                                                                                                            <span className="h-txt" style={{minWidth:"140px"}}>Menu For {meal.mealType}:</span>
                                                                                                            <span className="hr-line"></span>
                                                                                                        </h5>
                                                                                                    </div>
                                                                                                    <div className="meal-details">
                                                                                                        <p className="total-plate"><span className="label">Total Plate Count:</span> <span>{meal.totalPlateCount}</span></p>
                                                                                                        <p className="veg-plate"><span className="label">Veg Plate Count:</span> <span>{meal.vegPlateCount}</span></p>

                                                                                                        <div className="serving-type">
                                                                                                            <span className="label">Meal Serving Type:</span>
                                                                                                            <ul className="mb-0">
                                                                                                                {
                                                                                                                    meal.servingType.map((type,j)=>{
                                                                                                                        return(
                                                                                                                            <li key={j}>{type}</li>
                                                                                                                        )
                                                                                                                    })
                                                                                                                }
                                                                                                            </ul>
                                                                                                        </div>
                                                                                                        <div className="meal-menu">
                                                                                                            <span className="label">Food Menu:</span>
                                                                                                            <ul className="mb-0">
                                                                                                                {
                                                                                                                    meal.foodMenu.map((type,k)=>{
                                                                                                                        return(
                                                                                                                            <li key={k}>{type.label}</li>
                                                                                                                        )
                                                                                                                    })
                                                                                                                }
                                                                                                            </ul>
                                                                                                        </div>
                                                                                                        <div className="live-counters">
                                                                                                            <span className="label">Live Counters:</span>
                                                                                                            <ul className="mb-0">
                                                                                                                {
                                                                                                                    meal.liveCounters.map((type,z)=>{
                                                                                                                        return(
                                                                                                                            <li key={z}>{type.label}</li>
                                                                                                                        )
                                                                                                                    })
                                                                                                                }
                                                                                                            </ul>
                                                                                                        </div>
                                                                                                        <p className="event-note"><span className="label">customer Note:</span> <span>{meal.userNote}</span></p>
                                                                                                    </div>
                                                                                                </>
                                                                                            )
                                                                                        })
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="track-booking-status">
                                                                <p className="mb-0">Status: <span>{(data.is_any_due === true)?'In Progress':'Completed'}</span></p>
                                                            </div>
                                                            <div className="track-steps-section">
                                                                {/* <div className="btn-for-scroll">
                                                                    <button className="chevron-left-button" onClick={() => catFilterScroll('left')}><i className="fa fa-lg fa-chevron-left"></i></button>
                                                                </div> */}
                                                                {/* <div className="container"> */}
                                                                    <div className="show-tracking-graph" ref={filterCatItem}>
                                                                        <ul>
                                                                            <li>
                                                                                {/* <i className="icons awesome fa-solid fa-user"></i> */}
                                                                                <i className="icons awesome fab fa-wpforms"></i>
                                                                                <div className="step first active">
                                                                                    <p>1</p>
                                                                                    <i className="awesome fa-solid fa-check"></i>
                                                                                </div>
                                                                                <p className="label">Filling Form</p>
                                                                            </li>
                                                                            <li>
                                                                                <i className="icons awesome fa fa-phone"></i>
                                                                                <div className={(data.is_responded === true)? "step second active": "step second"} pre-active="true">
                                                                                    <p>2</p>
                                                                                    <i className="awesome fa-solid fa-check"></i>
                                                                                </div>
                                                                                <p className="label">Discussion</p>
                                                                            </li>
                                                                            <li>
                                                                                <i className="icons awesome fa fa-credit-card"></i>
                                                                                <div className={(data.token_money_paid > 0)? "step third active": "step third"} pre-active={(data.is_responded === true)? "true": "false"}>
                                                                                    <p>3</p>
                                                                                    <i className="awesome fa-solid fa-check"></i>
                                                                                </div>
                                                                                <p className="label">Advanded Payment</p>
                                                                            </li>
                                                                            <li>
                                                                                <i className="icons awesome fas fa-edit"></i>
                                                                                <div className={(data.is_final_callbacked === true)? "step fourth active": "step fourth"} pre-active={(data.token_money_paid > 0)? "true": "false"}>
                                                                                    <p>4</p>
                                                                                    <i className="awesome fa-solid fa-check"></i>
                                                                                </div>
                                                                                <p className="label">Changes & Update</p>
                                                                            </li>
                                                                            <li>
                                                                                <i className="icons awesome fas fa-calendar-alt"></i>
                                                                                <div className={(data.is_service_done === true)? "step fifth active": "step fifth"} pre-active={(data.is_final_callbacked === true)? "true": "false"}>
                                                                                    <p>5</p>
                                                                                    <i className="awesome fa-solid fa-check"></i>
                                                                                </div>
                                                                                <p className="label">Event Day</p>
                                                                            </li>
                                                                            <li>
                                                                                <i className="icons awesome fas fa-calendar-alt"></i>
                                                                                <div className={(data.is_any_due === false)? "step sixth active": "step sixth"} pre-active={(data.is_service_done === true)? "true": "false"}>
                                                                                    <p>6</p>
                                                                                    <i className="awesome fa-solid fa-check"></i>
                                                                                </div>
                                                                                <p className="label">Fedback & Dues</p>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                {/* </div> */}
                                                                {/* <div className="btn-for-scroll">
                                                                    <button className="chevron-right-button" onClick={() => catFilterScroll('right')}><i className="fa fa-lg fa-chevron-right"></i></button>
                                                                </div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </>   
                                    :
                                    <></>
                                }
                            </div>
                            <div>
                                <FaqSection openGuidelines={openGuidelines} openBookingModal={openBookingModal} showAllItem='false'/>
                            </div>
                        </div>
                    )
                }
            </div>
            <GoToTop/>
        </div>
    )

}

export default TrackBooking;