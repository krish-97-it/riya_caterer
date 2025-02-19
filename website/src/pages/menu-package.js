import React,{useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import GoToTop from "../component/go-to-top";
import Loading from "../component/page-loading";
import FaqSection from "../component/faq-accordion";
import FoodMenus from "../component/explore-menu";
import CostCalculator from "../component/cost-estimator-calculator";
import { HashLink } from 'react-router-hash-link';

export default function MenuPackage({packageDetails, openGuidelines, openBookingModal}){
    // Set loading state to true initially
    const [isLoading, setLoading] = useState(true);

    // Page will load after 2 seconds
    useEffect(() => {
        // Simulate loading for 2 seconds
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    function scrollToCostCalculator(e){
        e.preventDefault();
        const element = document.getElementById("costcalculator");
        //you can do it by jquery. no matter
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    return(
        <div className="app-body">
            {
                isLoading ? (
                    <div className="main-content">
                        <Loading />
                    </div>
                ) : (
                    <div className="main-content">
                        <div className="menu-package-banner-section">
                            <div className="transparent-wrap">
                                <div className="container">
                                    <div className="banner-content-section">
                                        <p>Let's go through our service packages and Food Menu</p>
                                        <h1>Riya Caterer</h1>
                                        <p>Customize Menu Planner & Cost Calculator</p>
                                        <div className="enquiry-btn-section">
                                            <Link onClick={scrollToCostCalculator} className="btn enquiry-btn-two neon-glow-button">
                                                <span>
                                                    Go For Menu Planner
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="package-details-section">
                            <div className="package-filter-section-wrap">
                                <div className="container">
                                    <div className="our-package-heading">
                                        <div className="left-triangle"></div>
                                        <h3>Our Packages</h3>
                                        <div className="right-triangle"></div>
                                    </div>
                                    <p className="mt-3 mb-0 our-package-intro" data-aos="fade-out" data-aos-offset="50" data-aos-duration="1500" style={{color:"black"}}>We offers best in class packages from low to high budget. You can download a package and check details esily.</p>
                                </div>
                            </div>
                            <div className="package-details-section-wrap">
                                <div className="container">
                                    <div className="term-policy-section" data-aos="fade-up" data-aos-offset="50" data-aos-duration="1200">
                                        <div style={{border: "0px solid white", borderRadius: "0px 0px 10px 10px"}}></div>
                                        <div id="carouselExampleFade" className="carousel slide carousel-fade package-data-carousel">
                                            <div className="carousel-inner">
                                                {
                                                    (packageDetails.length > 0)?
                                                    <>
                                                        {
                                                            packageDetails.map((item,index)=>{
                                                                return(
                                                                    <div className={(index === 0)?"carousel-item active":"carousel-item"} key={index}>
                                                                        <ul className="our-package-ul">
                                                                            <h5>{item.package_name}</h5>
                                                                            {
                                                                                (item.key_points.map((points,i)=>{
                                                                                    return(
                                                                                        <li className="card" style={{color:"#ececec", backgroundColor:"#E98B43"}} key={i}>
                                                                                            <div className="icon" data-aos="fade-out" data-aos-offset="50" data-aos-duration="1000"><i className="fa-solid fa-circle-star"></i></div>
                                                                                            <div className="card-content-section" data-aos="zoom-in" data-aos-offset="50" data-aos-duration="1200">
                                                                                                <div className="title">{points.title}</div>
                                                                                                <div className="content">{points.description}</div>
                                                                                            </div>
                                                                                        </li>
                                                                                    )
                                                                                }))
                                                                            }
                                                                        </ul>
                                                                        {/* <div className="download-btn-section">
                                                                            <button className="btn enquiry-btn-two neon-glow-button">
                                                                                <span>Download This Package</span>
                                                                            </button>
                                                                        </div> */}
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                                }
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                                <i className="fa fa-lg fa-chevron-left"></i>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                                <i className="fa fa-lg fa-chevron-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="explore-menu-section pt-5 pb-4" id="exploremenu">
                            <div className="explore-menu-heading">
                                <h3>Explore Menu</h3>
                            </div>
                            <FoodMenus/>
                        </div>
                        <div className="cost-estimator-btn-section pt-3 pb-4" id="costcalculator">
                            <div className="explore-menu-heading">
                                <h3>Create & Estimate</h3>
                            </div>
                            {/* <p>Create your own menu and get an idea of esitimated cost instantly. Let's check our Cost Essitmate Calculator</p> */}
                            <div className="explore-form-section mt-3 pt-4 pb-5" style={{backgroundColor:"rgb(108 129 22 / 10%)"}}>
                                <CostCalculator/>
                            </div>
                        </div>
                        <div>
                            <FaqSection openGuidelines={openGuidelines} openBookingModal={openBookingModal} showAllItem='false'/>
                        </div>
                    </div>
                )
            }
            <GoToTop/>
        </div>
    )
}