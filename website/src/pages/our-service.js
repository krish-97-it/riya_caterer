import React from "react";
import GoToTop from "../component/go-to-top";

export default function Service(){
    return(
        <div className="app-body">
            <div className="main-content">
                <div className="service-banner-section">
                    <div className="container">
                        <div className="row">
                            <picture>
                                <source media="(min-width:650px)" srcSet="https://img.perceptpixel.com/pykhlszs/riya_caterer/service_desktop_banner.webp"/>
                                <source media="(max-width:649.98px)" srcSet="https://img.perceptpixel.com/pykhlszs/riya_caterer/service_mob_banner.webp"/>
                                <img src="hhttps://img.perceptpixel.com/pykhlszs/riya_caterer/service_mob_banner.webp" className="banner-img" style={{width:"100%", height:"auto"}} alt="order history"/>
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
            <GoToTop/>
        </div>
    )
}