import React,{useState, useEffect} from "react";
import GoToTop from "../component/go-to-top";
import Loading from "../component/page-loading";

export default function Service(){
    // Set loading state to true initially
    const [isLoading, setLoading] = useState(true);

    // Page will load after 2 seconds
    useEffect(() => {
        // Simulate loading for 2 seconds
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
                        <div className="service-banner-section">
                            <div className="container">
                                <div className="row">
                                    <picture>
                                        <source media="(min-width:650px)" srcSet="https://img.perceptpixel.com/pykhlszs/riya_caterer/service-page-banner.webp"/>
                                        <source media="(max-width:649.98px)" srcSet="https://img.perceptpixel.com/pykhlszs/riya_caterer/mob-service-page-banner.webp"/>
                                        <img src="https://img.perceptpixel.com/pykhlszs/riya_caterer/mob-service-page-banner.webp" className="banner-img" style={{width:"100%", height:"auto"}} alt="order history"/>
                                    </picture>
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