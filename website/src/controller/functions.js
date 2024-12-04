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

    // api call to get food menus from backend db. Api written in backend project
    const [userReviews, updateUserReviews]          =   useState([]);

    // listing api endpoints urls
    const APIUrls                                   =   {
        "getUserReviewsUrl"   : Costant_Variables.SERVER_BASE_URL+'/loadreviews'
    };

    function loadUserReviews(){
        axios.get(APIUrls.getUserReviewsUrl).then((res) => {
            updateUserReviews(res.data.data);
        }).catch((error) => {
            console.log(error)
        });
    }

    useEffect(() => {
        loadUserReviews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Homepage getReviewList = {userReviews}/>}/>
                <Route exact path="/contact-us" element={<Contact/>}/>
                <Route exact path="/reviews" element={<Reviews getReviewList = {userReviews}/>}/>
                <Route exact path="/our-service" element={<Service/>}/>
                <Route exact path="/gallery" element={<Gallery/>}/>
                <Route exact path="*" element={<Errorpage />} />
            </Routes>
            <Footer/>
        </Router>
    )
}