import React from "react";
import { NavLink } from "react-router-dom";
import GoogleReviews from "../component/google-review-widget";

export default function Review(){
    return(
        <div className="app-body">
            <div className="main-content">
                <div className="review-page-banner-section">
                    <div className="container">
                        <NavLink to="https://www.google.com/search?hl=en-IN&gl=in&q=Riya+Caterers,+1/H/98,+Sarba+Khan+Rd,+Paikpara+First+Row,+Paikpara,+Kolkata,+West+Bengal+700037&ludocid=16177022713476856575&lsig=AB86z5VPIMrE8azbOjuIirXKLIEV#lrd=0x39f89d82587de72f:0xe0805472c836baff,3" className="add-review-banner">
                            <picture>
                                <source media="(min-width:768px)" srcSet="https://img.perceptpixel.com/pykhlszs/review_page_banner_desktop.webp"/>
                                <source media="(max-width:767.98px)" srcSet="https://img.perceptpixel.com/pykhlszs/review_page_mob_banner.jpeg"/>
                                <img src="https://img.perceptpixel.com/pykhlszs/review_page_mob_banner.jpeg" alt="order history" style={{width:"100%", height:"auto"}}/>
                            </picture>
                        </NavLink>
                    </div>
                </div>
                <div className="customer-reviews-section">
                    <div className="container">
                        <GoogleReviews/>
                    </div>
                </div>
            </div>
        </div>
    )
}