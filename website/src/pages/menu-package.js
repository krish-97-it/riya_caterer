import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import GoToTop from "../component/go-to-top";
import Loading from "../component/page-loading";

export default function MenuPackage({packageDetails}){
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
                        <div className="menu-package-banner-section">
                            <div className="transparent-wrap">
                                <div className="container">
                                    <div className="banner-content-section">
                                        <p>Let's go through our service packages and Food Menu</p>
                                        <h1>Riya Caterer</h1>
                                        <p>Customize Menu Planner & Cost Calculator</p>
                                        <div className="enquiry-btn-section">
                                            <Link to="/contact-us" className="btn enquiry-btn-two neon-glow-button">
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
                                    <p className="mt-4 mb-0 our-package-intro" style={{color:"black"}}>We offers best in class packages from low to high budget. You can download a package and check details esily.</p>
                                </div>
                            </div>
                            <div className="package-details-section-wrap">
                                <div className="container">
                                    <div className="term-policy-section">
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
                                                                                            <div className="icon"><i className="fa-solid fa-circle-star"></i></div>
                                                                                            <div className="card-content-section">
                                                                                                <div className="title">{points.title}</div>
                                                                                                <div className="content">{points.description}</div>
                                                                                            </div>
                                                                                        </li>
                                                                                    )
                                                                                }))
                                                                            }
                                                                            {/* <li className="card" style={{color:"#ececec", backgroundColor:"#E98B43"}}>
                                                                                <div className="icon"><i className="fa-solid fa-house"></i></div>
                                                                                <div className="title">Price range</div>
                                                                                <div className="content">Starts from Rs.350 per plate</div>
                                                                            </li>
                                                                            <li className="card" style={{color:"#ececec", backgroundColor:"#C23D2A"}}>
                                                                                <div className="icon"><i className="fa-solid fa-gear"></i></div>
                                                                                <div className="title">Service</div>
                                                                                <div className="content">Cooking & Serving</div>
                                                                            </li>
                                                                            <li className="card" style={{color:"#ececec", backgroundColorcolor:"#842C2A"}}>
                                                                                <div className="icon"><i className="fa-solid fa-magnifying-glass"></i></div>
                                                                                <div className="title">No. of food</div>
                                                                                <div className="content">You can choose maximum 10-12 Food items</div>
                                                                            </li>
                                                                            <li className="card" style={{color:"#ececec", backgroundColor:"#022F46"}}>
                                                                                <div className="icon"><i className="fa-solid fa-chart-column"></i></div>
                                                                                <div className="title">Food Stall</div>
                                                                                <div className="content">Extra Charges Included</div>
                                                                            </li>
                                                                            <li className="card" style={{color:"#ececec", backgroundColor:"#032437"}}>
                                                                                <div className="icon"><i className="fa-solid fa-circle-star"></i></div>
                                                                                <div className="title">Buffet</div>
                                                                                <div className="content">Buffet Style option available</div>
                                                                            </li>
                                                                            <li className="card" style={{color:"#ececec", backgroundColor:"#032437"}}>
                                                                                <div className="icon"><i className="fa-solid fa-circle-star"></i></div>
                                                                                <div className="title">Free Delivery</div>
                                                                                <div className="content">Free Delivery with in 5km. (charges may vary on distance & no. of plate)</div>
                                                                            </li> */}
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
                                                {/* <div className="carousel-item active">
                                                    <ul className="our-package-ul">
                                                        <h5>Economy Package</h5>
                                                        <li className="card" style={{color:"#ececec", backgroundColor:"#E98B43"}}>
                                                            <div className="icon"><i className="fa-solid fa-house"></i></div>
                                                            <div className="title">Price range</div>
                                                            <div className="content">Starts from Rs.350 per plate</div>
                                                        </li>
                                                        <li className="card" style={{color:"#ececec", backgroundColor:"#C23D2A"}}>
                                                            <div className="icon"><i className="fa-solid fa-gear"></i></div>
                                                            <div className="title">Service</div>
                                                            <div className="content">Cooking & Serving</div>
                                                        </li>
                                                        <li className="card" style={{color:"#ececec", backgroundColorcolor:"#842C2A"}}>
                                                            <div className="icon"><i className="fa-solid fa-magnifying-glass"></i></div>
                                                            <div className="title">No. of food</div>
                                                            <div className="content">You can choose maximum 10-12 Food items</div>
                                                        </li>
                                                        <li className="card" style={{color:"#ececec", backgroundColor:"#022F46"}}>
                                                            <div className="icon"><i className="fa-solid fa-chart-column"></i></div>
                                                            <div className="title">Food Stall</div>
                                                            <div className="content">Extra Charges Included</div>
                                                        </li>
                                                        <li className="card" style={{color:"#ececec", backgroundColor:"#032437"}}>
                                                            <div className="icon"><i className="fa-solid fa-circle-star"></i></div>
                                                            <div className="title">Buffet</div>
                                                            <div className="content">Buffet Style option available</div>
                                                        </li>
                                                        <li className="card" style={{color:"#ececec", backgroundColor:"#032437"}}>
                                                            <div className="icon"><i className="fa-solid fa-circle-star"></i></div>
                                                            <div className="title">Free Delivery</div>
                                                            <div className="content">Free Delivery with in 5km. (charges may vary on distance & no. of plate)</div>
                                                        </li>
                                                    </ul>
                                                    <div className="download-btn-section">
                                                        <button className="btn enquiry-btn-two neon-glow-button">
                                                            <span>Download This Package</span>
                                                        </button>
                                                    </div>
                                                </div> */}
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
                    </div>
                )
            }
            <GoToTop/>
        </div>
    )
}