import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "../component/header";
import Footer from "../component/footer";
import Homepage from "../pages/homepage";
import Reviews from "../pages/review";
import Contact from "../pages/contact-us"
import Gallery from "../pages/work-gallery";
import Service from "../pages/our-service";
// import Errorpage from "./pages/404-page";

export default function MainFunction(){


    return(
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Homepage/>}/>
                <Route exact path="/contact-us" element={<Contact/>}/>
                <Route exact path="/reviews" element={<Reviews/>}/>
                <Route exact path="/our-service" element={<Service/>}/>
                <Route exact path="/gallery" element={<Gallery/>}/>
                {/* <Route exact path="*" element={<Errorpage />} /> */}
            </Routes>
            <Footer/>
        </Router>
    )
}