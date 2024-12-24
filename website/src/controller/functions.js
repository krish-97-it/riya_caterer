import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import axios from "axios";
import Costant_Variables from "./constant-variables";
import Header from "../component/header";
import Footer from "../component/footer";
import Homepage from "../pages/homepage";
import Reviews from "../pages/review";
import Contact from "../pages/contact-us"
import Gallery from "../pages/work-gallery";
import Service from "../pages/our-service";
import Errorpage from "../pages/404-page";

export default function MainFunction(){

    let websiteBaseUrl = window.location.origin;
    const [imageModal, updateImageModal]            = useState('hide');
    const [sortByInput, setSortByInput]             = useState('default');
    const [filterByInput, setFilterByInput]         = useState('mix');
    const [galleryTempData, updateGalleryTempData]  = useState([]);

    // api call to get food menus from backend db. Api written in backend project
    const [userReviews, updateUserReviews]          =   useState([]);
    const [workGalleryData, updateWorkGalleryData]  =   useState([]);

    // listing api endpoints urls
    const APIUrls                                   =   {
        "getUserReviewsUrl"   : Costant_Variables.SERVER_BASE_URL+'/loadreviews',
        "getGalleryImagesUrl" : Costant_Variables.SERVER_BASE_URL+'/loadgallery',
    };


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

    useEffect(() => {
        loadUserReviews();
        getGalleryImages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const openImageModal = ()=> {
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

    let getFilteredItemList   = galleryTempData.filter((item) =>
        item.group.toLowerCase().includes(currentEvent)
    );
    getFilteredItemList = getFilteredItemList;

    // check if any input of sort by is added or not, then rearrange the filtered data as per condition else store the filtered data only
    getFilteredItemList = sortByInput === 'default' ? getFilteredItemList : getSortByInputData(getFilteredItemList);
    getFilteredItemList = filterByInput === 'mix' ? getFilteredItemList : getFilterByInputData(getFilteredItemList);

    return(
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Homepage getReviewList = {userReviews}/>}/>
                <Route exact path="/contact-us" element={<Contact/>}/>
                <Route exact path="/reviews" element={<Reviews getReviewList = {userReviews}/>}/>
                <Route exact path="/our-service" element={<Service/>}/>
                <Route exact path="/gallery" element={<Gallery getSortByInput={getSortByInput} getGalleryByAlbum={getGalleryByAlbum} getFilterByInput={getFilterByInput} currentEvent={currentEvent} getFilteredItemList={getFilteredItemList}/>}/>
                <Route exact path="*" element={<Errorpage />} />
            </Routes>
            <Footer/>
        </Router>
    )
}