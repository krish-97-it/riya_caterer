import React,{useState, useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import GoogleReviews from "../component/google-review-widget";
import GoToTop from "../component/go-to-top";
import Loading from "../component/page-loading";

export default function Review({getReviewList}){    
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
                {
                    isLoading ? (
                        <div className="main-content">
                            <Loading />
                        </div>
                    ) : (
                        <div className="main-content">
                            <div className="review-page-banner-section">
                                <div className="section-wrap">
                                    <div className="container">
                                        <div className="review-banner-txt-section">
                                            <p>Building Trust and Enhance Quality better than yesterday</p>
                                            <h1>Riya Caterer</h1>
                                            <p>- Every feedback is important to us -</p>
                                            <div className="enquiry-btn-section">
                                                <Link to="/contact-us" className="btn enquiry-btn-two neon-glow-button">
                                                    <span>
                                                        Share your review
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="customer-reviews-section">
                                <div className="container">
                                    <h3>Customer Reviews</h3>
                                </div>
                                <div className="container">
                                    <div>
                                        <p className="intro-p">We care about your trust. Check What our customer says about us -</p>
                                        <GoogleReviews getReviewList={getReviewList}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            <GoToTop/>
        </div>
    )
}