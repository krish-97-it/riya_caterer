import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import axios from "axios";
import Constant_Variables from "./constant-variables";
import Header from "../component/header";
import Footer from "../component/footer";
import Homepage from "../pages/homepage";
import Reviews from "../pages/review";
import Contact from "../pages/contact-us"
import Gallery from "../pages/work-gallery";
import Service from "../pages/our-service";
import Errorpage from "../pages/404-page";
import MenuPackage from "../pages/menu-package";
import FAQ from "../pages/faq-page";
import TrackBooking from "../pages/track-booking";

export default function MainFunction(){

    // let websiteBaseUrl = window.location.origin;
    const [imageModal, updateImageModal]            = useState('hide');
    const [sortByInput, setSortByInput]             = useState('default');
    const [filterByInput, setFilterByInput]         = useState('mix');
    const [galleryTempData, updateGalleryTempData]  = useState([]);
    const [packageDetails, updatePackageDetails]    = useState([]);

    // api call to get reviews, galleryimg, chatbotMssg from backend db. Api written in backend project
    const [userReviews, updateUserReviews]          = useState([]);
    const [workGalleryData, updateWorkGalleryData]  = useState([]);
    const [chatbotReplyMssg, sethatbotReplyMssg]    = useState([]);

    // listing api endpoints urls
    const APIUrls                                   =   {
        "getUserReviewsUrl"     : Constant_Variables.SERVER_BASE_URL+'/loadreviews',
        "getGalleryImagesUrl"   : Constant_Variables.SERVER_BASE_URL+'/loadgallery',
        "getPackageDetailsUrl"  : Constant_Variables.SERVER_BASE_URL+'/getPackageDetails',
        "getChatBotMssgUrl"     : Constant_Variables.SERVER_BASE_URL+'/loadChatBot'
    };


    function loadChatBotMssg(){
        axios.get(APIUrls.getChatBotMssgUrl).then((res) => {
            sethatbotReplyMssg(res.data.data);
        }).catch((error) => {
            console.log(error)
        });
    }

    function loadUserReviews(){
        axios.get(APIUrls.getUserReviewsUrl).then((res) => {
            updateUserReviews(res.data.data);
        }).catch((error) => {
            console.log(error)
        });
    }

    function getGalleryImages(){
        axios.get(APIUrls.getGalleryImagesUrl).then((res) => {
            updateWorkGalleryData(res.data.data);
            updateGalleryTempData(res.data.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    function getPackageDetails(){
        axios.get(APIUrls.getPackageDetailsUrl).then((res) => {
            updatePackageDetails(res.data.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        loadChatBotMssg();
        loadUserReviews();
        getGalleryImages();
        getPackageDetails();
        futureDateValidation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [currentImgIndex, updateCurrentImgIndex] = useState(null);
    const openImageModal = (e)=> {
        let ele_id = e.currentTarget.value;
        updateCurrentImgIndex(ele_id);
        updateImageModal('show');
    }
    const closeImageModal = () => {
        updateImageModal('hide');
    }

    //search images and videos of a particular event once click on event category filter
    const [currentEvent, updateCurrentEvent] = useState('');
    const getGalleryByAlbum = (event) =>{
        let ele_val= event.currentTarget.value;
        updateCurrentEvent(ele_val.toLowerCase());
        const abc = workGalleryData.filter((data) =>
            data.group.toLowerCase().includes(ele_val)
        );
        updateGalleryTempData(abc);
    }

    //Book Now Pop Up Form
    const [showBookingModal, updateBookingModal] = useState('hide')
    function openBookingModal(){
        updateBookingModal('show');
    }
    function openHeaderBookingModal(){
        updateBookingModal('show');
        if(window.outerWidth < 768){
            document.querySelector("button.navbar-toggler").click();
        }
    }
    function closeBookingModal(){
        updateBookingModal('hide');
    }

    //Guidlines Popup
    const [showGuidelinesPopup, updateShowGuidelinesPopup] = useState('hide')
    function openGuidelines(){
        updateShowGuidelinesPopup('show');
    }
    function closeGuidelines(){
        updateShowGuidelinesPopup('hide');
    }

    //ChatBot Box
    const [showChatBox, setShowChatBox] = useState('hide')
    function openChatBox(){
        setShowChatBox('show');
    }
    function closeChatBox(){
        setShowChatBox('hide');
    }

    // help to get input of sort by filter
    function getSortByInput(event){
        let ele_val      = event.target.value;
        setSortByInput(ele_val);
    }

    // This function helps to sort data depends on the input of sort by filter
    function getSortByInputData(tempData){
        let temp_array = [];
        if(sortByInput === 'most_liked'){
            temp_array = tempData.sort(function(a, b){return a.most_liked-b.most_liked});
            return(temp_array);
        }else if(sortByInput === 'most-recent'){
            temp_array = tempData.sort(function(a, b){return a.most_liked-b.most_liked});
            return (temp_array);
        }else{
            return(tempData);
        }
    }

    // help to get input of sort by filter
    function getFilterByInput(event){
        let ele_val      = event.target.value;
        setFilterByInput(ele_val);
    }

    // This function helps to sort data depends on the input of sort by filter
    function getFilterByInputData(tempData){
        const temp_array  =  tempData.filter((data) =>
            data.file_type.toLowerCase().includes(filterByInput)
        );
        return(temp_array);
    }

    function loadAllImg(){
        updateCurrentEvent('');
        setSortByInput("default");
        setFilterByInput("mix");
        document.getElementById("defaultSortBy").checked = true;
        document.getElementById("defaultFilterBy").checked = true;
        updateGalleryTempData(workGalleryData)
    }

    // Every time code rendered it will filtered the list with current selected Event
    let getFilteredItemList   = galleryTempData.filter((item) =>
        item.group.toLowerCase().includes(currentEvent)
    );
    getFilteredItemList = getFilteredItemList;

    // After checking current Event, check if any input of sort by is added or not, then rearrange the filtered data as per condition
    getFilteredItemList = sortByInput === 'default' ? getFilteredItemList : getSortByInputData(getFilteredItemList);

    // Final check will be done for filter by, check what is the input of filterby and filteredthe list.
    getFilteredItemList = filterByInput === 'mix' ? getFilteredItemList : getFilterByInputData(getFilteredItemList);

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    function futureDateValidation(ele, ele_val){
        var todays_Date = new Date();    // Get today's date.
        var todays_time = todays_Date.getTime();
        // var y           = 12     // 1y   = 12m
        var m           = 12     // 1y   = 12m
        var d           = 30     // 1m   = 30d
        var h           = 24     // 1day = 24h
        var min         = 60     // 1h   =  60min
        var sec         = 60     // 1min = 60sec
        var ms          = 1000   // 1sec = 1000 mili-second

        var max_time_span   = ms*sec*min*h*d*m*2;   // 2years  1000*60*60*24*30*12*2
        var min_time_span   = ms*sec*min*h*1;       //  1day  1000*60*60*24*1
        var max_future_date = todays_time+max_time_span;  //2years from today
        var min_start_date  = todays_time+min_time_span;

        //convert milisecond to date object
        var max_date = new Date(max_future_date);
        var min_date = new Date(min_start_date);

        //Get Formated date
        var max_date_format = getFormatedDate(max_date,'-');
        var min_date_format = getFormatedDate(min_date,'-');

        setStartDate(min_date_format);
        setEndDate(max_date_format);
    
    }
    function getFormatedDate(date,symbol){
        var year        = date.getFullYear();            // yyyy
        var month       = ("0" + (date.getMonth() + 1)).slice(-2); // mm
        var day         = ("0" + date.getDate()).slice(-2);   // dd
        var finalDate   = (year + symbol + month + symbol + day);
        return finalDate
    }


    // chat bot fns
    const [chat, updateChat] = useState([
        {
            msg_title:"Intro",
            msg_text:"Hi, I am Riya. How can i help you?",
            buttons:[],
            links:[],
            lists:[],
            keys:"intro, hello",
            next_msg:"quick links",
            isUser:false,
            lastMsg:''
        },
        {
            msg_title: "Quick Links",
            msg_text: "Here are a few helpful things you can check out to get started:",
            buttons: [
                {
                    value: "openBookingModal",
                    name: "Booking Form"
                },
                {
                    value: "openGuidelines",
                    name: "Work Flow"
                }
            ],
            links: [
                {
                    href: "/track-booking",
                    name: "Track Booking",
                    type: "button"
                },
                {
                    href: "/menu-packages",
                    name: "Packages",
                    type: "button"
                }
            ],
            lists: [],
            msg_keys: "quick links,important links",
            next_msg: "",
            isUser:false,
            lastMsg:'bot'
        }
    ])
    const [lastMsg, updateLastMsg] = useState('');

    function chatBotNextMsg(){
        let chat_len = chat.length;
        if(chat_len>0){
            if(chat[chat_len-1].next_msg !== ''){
                // setSearchInput(chat[chat_len-1].next_msg);
                getChatReply(chat[chat_len-1].next_msg);
            }
        }
    }

    function getChatReply(arr){
        if(msgInput !== ''){
            // updateLastMsg('user');
            let abc = chatbotReplyMssg.filter((msg) =>
                msg.msg_keys.toLowerCase().includes(msgInput.toLowerCase())
            );
            if(abc.length < 1){
                abc = chatbotReplyMssg.filter((msg) =>
                    msg.msg_keys.toLowerCase().includes('error')
                );
            }
            for(var i=0; i<abc.length; i++){
                let update_arr = [...arr, {
                    msg_title: abc[i].msg_title,
                    msg_text:abc[i].msg_text,
                    buttons:abc[i].buttons,
                    links:abc[i].links,
                    lists:abc[i].lists,
                    keys:abc[i].keys,
                    next_msg:abc[i].keys,
                    isUser:false,
                    lastMsg:abc[i].lastMsg,
                }]
                updateChat(update_arr);
            }
            updateLastMsg('bot');
            // console.log(updateArr);
            // updateChat(updateArr);
        }
    }

    const [msgInput, setMsgInput] = useState("");
    function msgInputChange(e){
        let input_val = e.target.value
        setMsgInput(input_val);
    }

    function sendUserMsgInput(val){
        if(msgInput !== ''){
            let new_arr = [...chat, {
                msg_title:"User Input",
                msg_text:msgInput,
                buttons:[],
                links:[],
                lists:[],
                keys:"",
                next_msg:"",
                isUser:true,
                lastMsg:lastMsg
            }]
            updateChat(new_arr);
            updateLastMsg('user');
            getChatReply(new_arr);
            setMsgInput("");
        }
    }

    function doTask(event,fn){
        event.preventDefault();
        if(fn === 'openBookingModal'){
            // setMsgInput("Booking Form");
            let new_arr = [...chat, {
                msg_title:"User Input",
                msg_text:'Booking Form',
                buttons:[],
                links:[],
                lists:[],
                keys:"",
                next_msg:"",
                isUser:true,
                lastMsg:lastMsg
            }]
            updateChat(new_arr);
            updateLastMsg('user')
            openBookingModal();
        }else if(fn === 'openGuidelines'){
            // setMsgInput("Work Flow");
            let new_arr = [...chat, {
                msg_title:"User Input",
                msg_text:'Work Flow',
                buttons:[],
                links:[],
                lists:[],
                keys:"",
                next_msg:"",
                isUser:true,
                lastMsg:lastMsg
            }]
            updateChat(new_arr);
            updateLastMsg('user');
            openGuidelines();
        }
    }

    return(
        <Router>
            <Header showBookingModal={showBookingModal} openBookingModal={openHeaderBookingModal} closeBookingModal={closeBookingModal} packageDetails={packageDetails} bookingStartDate={startDate} bookingEndDate={endDate}/>
            <Routes>
                <Route exact path="/" element={<Homepage getReviewList = {userReviews} openBookingModal={openBookingModal}/>}/>
                <Route exact path="/contact-us" element={<Contact bookingStartDate={startDate} bookingEndDate={endDate} openGuidelines={openGuidelines} openBookingModal={openBookingModal}/>}/>
                <Route exact path="/reviews" element={<Reviews getReviewList = {userReviews}/>}/>
                <Route exact path="/our-service" element={<Service openBookingModal={openBookingModal} openGuidelines={openGuidelines}/>}/>
                <Route exact path="/menu-packages" element={<MenuPackage packageDetails={packageDetails} openGuidelines={openGuidelines} openBookingModal={openBookingModal}/>}/>
                <Route exact path="/gallery" element={<Gallery imageModal={imageModal} openImageModal={openImageModal} closeImageModal={closeImageModal} getSortByInput={getSortByInput} getGalleryByAlbum={getGalleryByAlbum} getFilterByInput={getFilterByInput} currentEvent={currentEvent} getFilteredItemList={getFilteredItemList} currentImgIndex={currentImgIndex} loadAllImg={loadAllImg} openBookingModal={openBookingModal}/>}/>
                <Route exact path="/faq" element={<FAQ openBookingModal={openBookingModal} openGuidelines={openGuidelines}/>}/>
                <Route exact path="/track-booking" element={<TrackBooking openBookingModal={openBookingModal} openGuidelines={openGuidelines}/>}/>
                <Route exact path="*" element={<Errorpage />} />
            </Routes>
            <Footer openBookingModal={openBookingModal} showGuidelinesPopup={showGuidelinesPopup} openGuidelines={openGuidelines} closeGuidelines={closeGuidelines} showChatBox={showChatBox} openChatBox={openChatBox} closeChatBox={closeChatBox} msgInputChange={msgInputChange} sendUserMsgInput={sendUserMsgInput} msgInput={msgInput} chat={chat} doTask={doTask} lastMsg={lastMsg}/>
        </Router>
    )
}