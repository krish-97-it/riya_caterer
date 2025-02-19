import React,{useState, useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import GoogleReviews from "../component/google-review-widget";
import GoToTop from "../component/go-to-top";
import Loading from "../component/page-loading";
import FaqSection from "../component/faq-accordion";
import { HashLink } from 'react-router-hash-link';

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
                                                <Link to="https://www.google.com/search?hl=en-IN&gl=in&q=Riya+Caterers,+1/H/98,+Sarba+Khan+Rd,+Paikpara+First+Row,+Paikpara,+Kolkata,+West+Bengal+700037&ludocid=16177022713476856575&lsig=AB86z5VPIMrE8azbOjuIirXKLIEV#lrd=0x39f89d82587de72f:0xe0805472c836baff,3" target="_blank" className="btn enquiry-btn-two neon-glow-button">
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
                            <div className="menuplanner-banner-section" style={{backgroundColor:"#25181b"}}>
                                <div className="container">
                                    <div className="row">
                                        <HashLink to="/menu-packages#costcalculator">
                                            <picture>
                                                <source media="(min-width:650px)" srcSet="https://img.perceptpixel.com/pykhlszs/riya_caterer/menu-planner-desktop.webp"/>
                                                <source media="(max-width:649.98px)" srcSet="https://img.perceptpixel.com/pykhlszs/riya_caterer/mob-menu-panner.webp"/>
                                                <img src="https://img.perceptpixel.com/pykhlszs/riya_caterer/mob-menu-panner.webp" className="w-100 banner-img" style={{width:"100%", height:"auto"}} alt="Menu Planner"/>
                                            </picture>
                                        </HashLink>
                                    </div>
                                </div>
                            </div>
                            <div><FaqSection/></div>
                        </div>
                    )
                }
            <GoToTop/>
        </div>
    )
}