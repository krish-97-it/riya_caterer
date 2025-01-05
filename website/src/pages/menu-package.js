import React,{useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import GoToTop from "../component/go-to-top";
import Loading from "../component/page-loading";

export default function MenuPackage({currentPackage, getPackageDetails}){
    // Set loading state to true initially
    const [isLoading, setLoading] = useState(true);

    // Page will load after 2 seconds
    useEffect(() => {
        // Simulate loading for 2 seconds
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    const filterCatItem     =   useRef();
    const catFilterScroll   =   (direction) => {
        sideScroll(filterCatItem.current,direction,20,140,10);
    }

    function sideScroll(element,direction,speed,distance,step){
        var scrollAmount    = 0;
        var slideTimer      = setInterval(function(){
            if(direction === 'left'){
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
            scrollAmount += step;
            if(scrollAmount >= distance){
                clearInterval(slideTimer);
            }
        }, speed);
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
                                    <p className="mt-4 mb-0" style={{color:"black"}}>We offers best in class packages from low to high budget. You can download a package and check details esily.</p>
                                </div>
                            </div>
                            <div className="package-details-section-wrap">
                                <div className="container">
                                    <div className="term-policy-section">
                                        <div id="carouselExampleFade" class="carousel slide carousel-fade package-data-carousel">
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                {/* <h5>Economy Package</h5> */}
                                                    <ul className="our-package-ul">
                                                        <h5>Economy Package</h5>
                                                        <li class="card" style={{color:"#ececec", backgroundColor:"#E98B43"}}>
                                                            <div class="icon"><i class="fa-solid fa-house"></i></div>
                                                            <div class="title">Lorem ipsum</div>
                                                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis pretium euismod. Aenean elit sapien, varius quis ante sit amet, tincidunt finibus orci. Ut consectetur imperdiet quam, at ultrices mi rutrum ut. Sed semper justo quis nisl ornare interdum in ut ante. </div>
                                                        </li>
                                                        <li class="card" style={{color:"#ececec", backgroundColor:"#C23D2A"}}>
                                                            <div class="icon"><i class="fa-solid fa-gear"></i></div>
                                                            <div class="title">Lorem ipsum</div>
                                                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis pretium euismod. Aenean elit sapien, varius quis ante sit amet, tincidunt finibus orci. Ut consectetur imperdiet quam, at ultrices mi rutrum ut. Sed semper justo quis nisl ornare interdum in ut ante. </div>
                                                        </li>
                                                        <li class="card" style={{color:"#ececec", backgroundColorcolor:"#842C2A"}}>
                                                            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                                                            <div class="title">Lorem ipsum</div>
                                                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis pretium euismod. Aenean elit sapien, varius quis ante sit amet, tincidunt finibus orci. Ut consectetur imperdiet quam, at ultrices mi rutrum ut. Sed semper justo quis nisl ornare interdum in ut ante. </div>
                                                        </li>
                                                        <li class="card" style={{color:"#ececec", backgroundColor:"#022F46"}}>
                                                            <div class="icon"><i class="fa-solid fa-chart-column"></i></div>
                                                            <div class="title">Lorem ipsum</div>
                                                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis pretium euismod. Aenean elit sapien, varius quis ante sit amet, tincidunt finibus orci. Ut consectetur imperdiet quam, at ultrices mi rutrum ut. Sed semper justo quis nisl ornare interdum in ut ante. </div>
                                                        </li>
                                                        <li class="card" style={{color:"#ececec", backgroundColor:"#032437"}}>
                                                            <div class="icon"><i class="fa-solid fa-circle-star"></i></div>
                                                            <div class="title">Lorem ipsum</div>
                                                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis pretium euismod. Aenean elit sapien, varius quis ante sit amet, tincidunt finibus orci. Ut consectetur imperdiet quam, at ultrices mi rutrum ut. Sed semper justo quis nisl ornare interdum in ut ante. </div>
                                                        </li>
                                                    </ul>
                                                    <div className="download-btn-section">
                                                        <button className="btn enquiry-btn-two neon-glow-button">
                                                            <span>Download This Package</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    {/* <h5>Silver Package</h5> */}
                                                    <ul className="our-package-ul">
                                                        <h5>Silver Package</h5>
                                                        <li class="card" style={{color:"#ececec", backgroundColor:"#E98B43"}}>
                                                            <div class="icon"><i class="fa-solid fa-house"></i></div>
                                                            <div class="title">Lorem ipsum</div>
                                                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis pretium euismod. Aenean elit sapien, varius quis ante sit amet, tincidunt finibus orci. Ut consectetur imperdiet quam, at ultrices mi rutrum ut. Sed semper justo quis nisl ornare interdum in ut ante. </div>
                                                        </li>
                                                        <li class="card" style={{color:"#ececec", backgroundColor:"#C23D2A"}}>
                                                            <div class="icon"><i class="fa-solid fa-gear"></i></div>
                                                            <div class="title">Lorem ipsum</div>
                                                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis pretium euismod. Aenean elit sapien, varius quis ante sit amet, tincidunt finibus orci. Ut consectetur imperdiet quam, at ultrices mi rutrum ut. Sed semper justo quis nisl ornare interdum in ut ante. </div>
                                                        </li>
                                                        <li class="card" style={{color:"#ececec", backgroundColorcolor:"#842C2A"}}>
                                                            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                                                            <div class="title">Lorem ipsum</div>
                                                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis pretium euismod. Aenean elit sapien, varius quis ante sit amet, tincidunt finibus orci. Ut consectetur imperdiet quam, at ultrices mi rutrum ut. Sed semper justo quis nisl ornare interdum in ut ante. </div>
                                                        </li>
                                                        <li class="card" style={{color:"#ececec", backgroundColor:"#022F46"}}>
                                                            <div class="icon"><i class="fa-solid fa-chart-column"></i></div>
                                                            <div class="title">Lorem ipsum</div>
                                                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis pretium euismod. Aenean elit sapien, varius quis ante sit amet, tincidunt finibus orci. Ut consectetur imperdiet quam, at ultrices mi rutrum ut. Sed semper justo quis nisl ornare interdum in ut ante. </div>
                                                        </li>
                                                        <li class="card" style={{color:"#ececec", backgroundColor:"#032437"}}>
                                                            <div class="icon"><i class="fa-solid fa-circle-star"></i></div>
                                                            <div class="title">Lorem ipsum</div>
                                                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis pretium euismod. Aenean elit sapien, varius quis ante sit amet, tincidunt finibus orci. Ut consectetur imperdiet quam, at ultrices mi rutrum ut. Sed semper justo quis nisl ornare interdum in ut ante. </div>
                                                        </li>
                                                    </ul>
                                                    <div className="download-btn-section">
                                                        <button className="btn enquiry-btn-two neon-glow-button">
                                                            <span>Download This Package</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    {/* <h5>Gold Package</h5> */}
                                                    <ul className="our-package-ul">
                                                        <h5>Gold Package</h5>
                                                        <li class="card" style={{color:"#ececec", backgroundColor:"#E98B43"}}>
                                                            <div class="icon"><i class="fa-solid fa-house"></i></div>
                                                            <div class="title">Lorem ipsum</div>
                                                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis pretium euismod. Aenean elit sapien, varius quis ante sit amet, tincidunt finibus orci. Ut consectetur imperdiet quam, at ultrices mi rutrum ut. Sed semper justo quis nisl ornare interdum in ut ante. </div>
                                                        </li>
                                                        <li class="card" style={{color:"#ececec", backgroundColor:"#C23D2A"}}>
                                                            <div class="icon"><i class="fa-solid fa-gear"></i></div>
                                                            <div class="title">Lorem ipsum</div>
                                                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis pretium euismod. Aenean elit sapien, varius quis ante sit amet, tincidunt finibus orci. Ut consectetur imperdiet quam, at ultrices mi rutrum ut. Sed semper justo quis nisl ornare interdum in ut ante. </div>
                                                        </li>
                                                        <li class="card" style={{color:"#ececec", backgroundColorcolor:"#842C2A"}}>
                                                            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                                                            <div class="title">Lorem ipsum</div>
                                                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis pretium euismod. Aenean elit sapien, varius quis ante sit amet, tincidunt finibus orci. Ut consectetur imperdiet quam, at ultrices mi rutrum ut. Sed semper justo quis nisl ornare interdum in ut ante. </div>
                                                        </li>
                                                        <li class="card" style={{color:"#ececec", backgroundColor:"#022F46"}}>
                                                            <div class="icon"><i class="fa-solid fa-chart-column"></i></div>
                                                            <div class="title">Lorem ipsum</div>
                                                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis pretium euismod. Aenean elit sapien, varius quis ante sit amet, tincidunt finibus orci. Ut consectetur imperdiet quam, at ultrices mi rutrum ut. Sed semper justo quis nisl ornare interdum in ut ante. </div>
                                                        </li>
                                                        <li class="card" style={{color:"#ececec", backgroundColor:"#032437"}}>
                                                            <div class="icon"><i class="fa-solid fa-circle-star"></i></div>
                                                            <div class="title">Lorem ipsum</div>
                                                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis pretium euismod. Aenean elit sapien, varius quis ante sit amet, tincidunt finibus orci. Ut consectetur imperdiet quam, at ultrices mi rutrum ut. Sed semper justo quis nisl ornare interdum in ut ante. </div>
                                                        </li>
                                                    </ul>
                                                    <div className="download-btn-section">
                                                        <button className="btn enquiry-btn-two neon-glow-button">
                                                            <span>Download This Package</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    {/* <h5>Diamond Package</h5> */}
                                                    <ul className="our-package-ul">
                                                        <h5>Diamond Package</h5>
                                                        <li class="card" style={{color:"#ececec", backgroundColor:"#E98B43"}}>
                                                            <div class="icon"><i class="fa-solid fa-house"></i></div>
                                                            <div class="title">Lorem ipsum</div>
                                                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis pretium euismod. Aenean elit sapien, varius quis ante sit amet, tincidunt finibus orci. Ut consectetur imperdiet quam, at ultrices mi rutrum ut. Sed semper justo quis nisl ornare interdum in ut ante. </div>
                                                        </li>
                                                        <li class="card" style={{color:"#ececec", backgroundColor:"#C23D2A"}}>
                                                            <div class="icon"><i class="fa-solid fa-gear"></i></div>
                                                            <div class="title">Lorem ipsum</div>
                                                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis pretium euismod. Aenean elit sapien, varius quis ante sit amet, tincidunt finibus orci. Ut consectetur imperdiet quam, at ultrices mi rutrum ut. Sed semper justo quis nisl ornare interdum in ut ante. </div>
                                                        </li>
                                                        <li class="card" style={{color:"#ececec", backgroundColorcolor:"#842C2A"}}>
                                                            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                                                            <div class="title">Lorem ipsum</div>
                                                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis pretium euismod. Aenean elit sapien, varius quis ante sit amet, tincidunt finibus orci. Ut consectetur imperdiet quam, at ultrices mi rutrum ut. Sed semper justo quis nisl ornare interdum in ut ante. </div>
                                                        </li>
                                                        <li class="card" style={{color:"#ececec", backgroundColor:"#022F46"}}>
                                                            <div class="icon"><i class="fa-solid fa-chart-column"></i></div>
                                                            <div class="title">Lorem ipsum</div>
                                                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis pretium euismod. Aenean elit sapien, varius quis ante sit amet, tincidunt finibus orci. Ut consectetur imperdiet quam, at ultrices mi rutrum ut. Sed semper justo quis nisl ornare interdum in ut ante. </div>
                                                        </li>
                                                        <li class="card" style={{color:"#ececec", backgroundColor:"#032437"}}>
                                                            <div class="icon"><i class="fa-solid fa-circle-star"></i></div>
                                                            <div class="title">Lorem ipsum</div>
                                                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis pretium euismod. Aenean elit sapien, varius quis ante sit amet, tincidunt finibus orci. Ut consectetur imperdiet quam, at ultrices mi rutrum ut. Sed semper justo quis nisl ornare interdum in ut ante. </div>
                                                        </li>
                                                    </ul>
                                                    <div className="download-btn-section">
                                                        <button className="btn enquiry-btn-two neon-glow-button">
                                                            <span>Download This Package</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <h5>Platinum Package</h5>
                                                    <ul className="our-package-ul">
                                                        {/* <h5>Platinum Package</h5> */}
                                                        <li class="card" style={{color:"#ececec", backgroundColor:"#E98B43"}}>
                                                            <div class="icon"><i class="fa-solid fa-house"></i></div>
                                                            <div class="title">Lorem ipsum</div>
                                                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis pretium euismod. Aenean elit sapien, varius quis ante sit amet, tincidunt finibus orci. Ut consectetur imperdiet quam, at ultrices mi rutrum ut. Sed semper justo quis nisl ornare interdum in ut ante. </div>
                                                        </li>
                                                        <li class="card" style={{color:"#ececec", backgroundColor:"#C23D2A"}}>
                                                            <div class="icon"><i class="fa-solid fa-gear"></i></div>
                                                            <div class="title">Lorem ipsum</div>
                                                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis pretium euismod. Aenean elit sapien, varius quis ante sit amet, tincidunt finibus orci. Ut consectetur imperdiet quam, at ultrices mi rutrum ut. Sed semper justo quis nisl ornare interdum in ut ante. </div>
                                                        </li>
                                                        <li class="card" style={{color:"#ececec", backgroundColorcolor:"#842C2A"}}>
                                                            <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                                                            <div class="title">Lorem ipsum</div>
                                                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis pretium euismod. Aenean elit sapien, varius quis ante sit amet, tincidunt finibus orci. Ut consectetur imperdiet quam, at ultrices mi rutrum ut. Sed semper justo quis nisl ornare interdum in ut ante. </div>
                                                        </li>
                                                        <li class="card" style={{color:"#ececec", backgroundColor:"#022F46"}}>
                                                            <div class="icon"><i class="fa-solid fa-chart-column"></i></div>
                                                            <div class="title">Lorem ipsum</div>
                                                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis pretium euismod. Aenean elit sapien, varius quis ante sit amet, tincidunt finibus orci. Ut consectetur imperdiet quam, at ultrices mi rutrum ut. Sed semper justo quis nisl ornare interdum in ut ante. </div>
                                                        </li>
                                                        <li class="card" style={{color:"#ececec", backgroundColor:"#032437"}}>
                                                            <div class="icon"><i class="fa-solid fa-circle-star"></i></div>
                                                            <div class="title">Lorem ipsum</div>
                                                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis pretium euismod. Aenean elit sapien, varius quis ante sit amet, tincidunt finibus orci. Ut consectetur imperdiet quam, at ultrices mi rutrum ut. Sed semper justo quis nisl ornare interdum in ut ante. </div>
                                                        </li>
                                                    </ul>
                                                    <div className="download-btn-section">
                                                        <button className="btn enquiry-btn-two neon-glow-button">
                                                            <span>Download This Package</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                                <i className="fa fa-lg fa-chevron-left"></i>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
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
        </div>
    )
}