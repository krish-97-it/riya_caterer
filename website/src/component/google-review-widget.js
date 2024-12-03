import React, {useRef} from "react";
import { NavLink } from "react-router-dom";
import GoogleLogo from '../assets/images/google.svg';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

export default function GoogleReviews(){
    const slider = useRef(null);
    const cardItemList = [
        {
            name : "ram",
            rating: 4,
            description: "hghg uyuyuy trtrrt",
        },
        {
            name : "Shyam",
            rating: 4,
            description: "hghg uyuyuy trtrrt",
        },
        {
            name : "Radha",
            rating: 4,
            description: "hghg uyuyuy trtrrt",
        },
        {
            name : "Karna",
            rating: 4,
            description: "hghg uyuyuy trtrrt",
        },
        {
            name : "Vijay",
            rating: 4,
            description: "hghg uyuyuy trtrrt",
        },
        {
            name : "Vikram",
            rating: 4,
            description: "hghg uyuyuy trtrrt",
        }
    ]
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
          breakpoint: { max: 767.98, min: 424 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 423.98, min: 320 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
    };
    const leftArrowStyle = {
        background: "transparent",
        border: 0,
        color: "black",
        fontSize: "20px",
        padding: "0px 0px 0px 10px"
    };
    const rightArrowStyle = {
        background: "transparent",
        border: 0,
        color: "black",
        fontSize: "20px",
        padding: "0px 10px 0px 0px"
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
                        cardItemList.map((item,index) => {
                            return (
                                <div className="card item-card active h-100" key={"card-"+index}> 
                                    {/* <img className="card-card-img card-img-top img-w-100" src={item.image.img_one} alt="Food Card"/> */}
                                    <div className="card-body card-body-style">
                                        <h5 className="card-title" style={{margin:"0px"}}>{item.name}
                                            <p style={{margin:"0px 0px 5px 0px"}}>{item.rating}</p>
                                        </h5>
                                        <div className="price-order" style={{margin:"0px 0px 45px 0px"}}>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="pos-bottom" style={{textAlign:"center"}}>
                                            {/* <Link to="/cuisine" className="btn btn-primary" style={{width:"100%"}} onClick={()=>getHomeCuisineName(item.name)}>Check Now</Link> */}
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