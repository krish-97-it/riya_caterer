import React,{useState,useEffect} from "react";
import Loading from "../component/page-loading";
import GoToTop from "../component/go-to-top";
import FaqSection from "../component/faq-accordion";

export default function FAQpage({openGuidelines, openBookingModal}){

    // Set loading state to true initially
    const [isLoading, setLoading] = useState(true);

    // Page will load after 2 seconds
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return(
        <div className="app-body">
            <div className="main-content">
                {
                    isLoading ? (
                        <Loading />
                    ) : (
                        <div className="faq-page-body">
                            <div className="faq-banner-section">
                                <div className="container">
                                    <img src="https://img.perceptpixel.com/pykhlszs/riya_caterer/faq-banner.webp" className="banner-img" style={{width:"100%", height:"auto"}} alt="order history"/>
                                </div>
                            </div>
                            <div className="faq-accordion-section">
                                <FaqSection openGuidelines={openGuidelines} openBookingModal={openBookingModal} showAllItem='true'/>
                            </div>
                            <div className="menuplanner-banner-section" style={{backgroundColor:"#25181b"}}>
                                <div className="container">
                                    <div className="row">
                                        <picture>
                                            <source media="(min-width:650px)" srcSet="https://img.perceptpixel.com/pykhlszs/riya_caterer/menu-planner-desktop.webp"/>
                                            <source media="(max-width:649.98px)" srcSet="https://img.perceptpixel.com/pykhlszs/riya_caterer/mob-menu-panner.webp"/>
                                            <img src="https://img.perceptpixel.com/pykhlszs/riya_caterer/mob-menu-panner.webp" className="w-100 banner-img" style={{width:"100%", height:"auto"}} alt="Menu Planner"/>
                                        </picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <GoToTop/>
        </div>
    )
}