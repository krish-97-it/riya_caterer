import React, {useRef} from "react";
import { NavLink } from "react-router-dom";
import GoogleLogo from '../assets/images/google.svg';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

export default function GoogleReviews({getReviewList}){
    const slider = useRef(null);
    const carouselSettings = {
        largeDesktop: {
            breakpoint: { max: 5000, min: 1024 },
            items: 4,
            slidesToSlide: 4 // optional, default to 1.
        },
        desktop: {
          breakpoint: { max: 1023.98, min: 768 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 767.98, min: 500 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 499.98, min: 320 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
    };
    const leftArrowStyle = {
        // background: "transparent",
        border: 0,
        color: "rgb(255 175 54)",
        fontSize: "20px",
        padding: "0px 8px 2px 6px",
        background: "rgba(0, 0, 0, .6)",
        borderRadius: "50%",
        height:"32px",
        width:"32px"
    };
    const rightArrowStyle = {
        // background: "transparent",
        border: 0,
        color: "rgb(255 175 54)",
        fontSize: "20px",
        padding: "0px 6px 2px 10px",
        background: "rgba(0, 0, 0, .6)",
        borderRadius: "50%",
        height:"32px",
        width:"32px"
    };
    const CustomRight = ({ onClick }) => (
        <button className="review-widget-carousel-arrow right" onClick={() => slider?.current?.next(1)} style={rightArrowStyle}>
            <i className="fa fa-lg fa-chevron-right"></i>
        </button>
      );
    const CustomLeft = ({ onClick }) => (
        <button className="review-widget-carousel-arrow left" onClick={() => slider?.current?.previous(1)} style={leftArrowStyle}>
            <i className="fa fa-lg fa-chevron-left"></i>
        </button>
    );

    return(
        <div className="review-widget">
            <div className="review-widget-body">
                <CustomLeft/>
                <Carousel
                    responsive={carouselSettings}
                    additionalTransfrom={0}
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    arrows={false}
                    renderButtonGroupOutside={true}
                    renderDotsOutside={true}
                    sliderClass=""
                    slidesToSlide={1}
                    // showDots
                    swipeable
                    // adaptiveHeight={true}
                    // customLeftArrow={<CustomLeft />}
                    // customRightArrow={<CustomRight />}
                    ref={slider}
                >
                    {
                        getReviewList.map((item,index) => {
                            return (
                                <div className="card review-card-item active h-100" key={"card-"+index}> 
                                    <div className="card-body card-body-style">
                                        <div className="card-title" style={{margin:"0px"}}>
                                            <div className="user-logo">
                                                <img className="user-logo-img" style={{height:"75px", width:"75px", borderRadius:"50%"}} src={item.profilepic} alt="Food Card"/>
                                            </div>
                                            <div className="name-address-txt">
                                                <h5 style={{marginBottom:"2px"}}>{item.firstname} {item.lastname}</h5>
                                                <p style={{margin:"0px 0px 5px 0px"}}>{item.address}</p>
                                            </div>
                                        </div>
                                        <div className="card-description" style={{margin:"0px"}}>
                                            <p style={{margin:"0px 0px 5px 0px"}} className="review-rating">
                                                {
                                                    [1, 2, 3, 4, 5].map((star,z) => {
                                                        return(
                                                            <span className='rating-star-style' key={z} style={{ color: (item.rating) >= star ? 'rgb(244 190 0)' : 'white'}}>
                                                                {/* ★ */}
                                                                <i className="fa fa-star"></i>
                                                            </span>
                                                        )
                                                    })
                                                }
                                            </p>
                                            <p className="review-summary" style={{margin:"0px"}} id={"item-"+index}>{(item.comment).substring(0, 100)}
                                                <br/>
                                                {
                                                    ((item.comment).length > 100)?
                                                        <NavLink to={item.comment_link} target="_blank" rel="noopener noreferrer">Read More</NavLink>
                                                    :
                                                    <></>
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Carousel>
                <CustomRight/>
                {/* <div class="elfsight-app-f0dae060-0083-49a1-bd36-45faa8b0ba4a" data-elfsight-app-lazy></div> */}
            </div>
            <div className="review-submit-section">
                <div className="rating-star">
                    <p><img src={GoogleLogo} alt="google-logo"></img>Reviews</p>
                    <p></p>
                    
                </div>
                <div className="review-on-google-link">
                    <NavLink to="https://www.google.com/search?hl=en-IN&gl=in&q=Riya+Caterers,+1/H/98,+Sarba+Khan+Rd,+Paikpara+First+Row,+Paikpara,+Kolkata,+West+Bengal+700037&ludocid=16177022713476856575&lsig=AB86z5VPIMrE8azbOjuIirXKLIEV#lrd=0x39f89d82587de72f:0xe0805472c836baff,3" target="_blank" rel="noopener noreferrer">Review Us On Google</NavLink> 
                </div>
            </div>
        </div>
    )
}