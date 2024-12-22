import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Loading from "../component/page-loading";
import GoToTop from "../component/go-to-top";

export default function Gallery(){
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
                        <div className="gallery-page-body">
                            <div className="banner-section">
                                <div className="gradient-bg">
                                    <h3>Riya Caterer</h3>
                                    <p className="page-heading">Image Gallery</p>
                                    <p className="sub-txt">Let's taste together the Glimpse Of Success</p>
                                    <div className="enquiry-btn-section">
                                        <Link to="/contact-us" className="btn enquiry-btn-two neon-glow-button">
                                            <span>
                                                Book For a Event
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="gallery-box-section">
                                <div className="container">
                                    <h3></h3>
                                    <p></p>
                                    <div className="">
                                        <h5>Filter By</h5>
                                        <div className="view-box"></div>
                                        <div className="img-slider"></div>
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