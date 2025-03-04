import React,{useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import Loading from "../component/page-loading";
import GoToTop from "../component/go-to-top";
import ImageCarouselViewBoxModal from "../component/custom-modal";
import NoImgIcon from "../assets/images/no-image-icon.svg";
import { HashLink } from 'react-router-hash-link';

export default function Gallery({imageModal, openImageModal, closeImageModal, getSortByInput, getGalleryByAlbum, getFilterByInput, currentEvent, getFilteredItemList, currentImgIndex, loadAllImg, openBookingModal}){
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
            <div className="main-content">
                {
                    isLoading ? (
                        <Loading />
                    ) : (
                        <div className="gallery-page-body">
                            <div className="banner-section">
                                <div className="gradient-bg">
                                    <h3>Riya Caterer</h3>
                                    <p className="page-heading">Image & Video Gallery</p>
                                    <p className="sub-txt">Let's taste together the Glimpse Of Success</p>
                                    <div className="enquiry-btn-section">
                                        <button to="https://wa.me/+919038335342?text=Hello%21%21" className="btn enquiry-btn-two neon-glow-button">
                                            <span>
                                                Get Free Consultation
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="gallery-box-section">
                                <div className="container">
                                    <div className="heading-section">
                                        <h3>Album</h3>
                                        <p className="intro-txt">We are glad to share the stories and moments of our Works with you. Be a witness of our memorable journey.</p>
                                        <div className="image-album-section">
                                            <div className="Gallery-filter-section">
                                                <div className="event-filter-section">
                                                    <div className="btn-for-scroll">
                                                        <button className="chevron-left-button" onClick={() => catFilterScroll('left')}><i className="fa fa-lg fa-chevron-left"></i></button>
                                                    </div>
                                                    <div className="food-category-buttons" ref={filterCatItem}>
                                                        <button id="btn-one" className="btn text-nowrap glow-button btn-one" onClick={getGalleryByAlbum} btn-active={(currentEvent === 'wedding')?"true":"false"} value="wedding"><span>Wedding</span></button>
                                                        <button id="btn-two" className="btn text-nowrap glow-button btn-two" onClick={getGalleryByAlbum} btn-active={(currentEvent === 'rice-ceremony')?"true":"false"} value="rice-ceremony"><span>Rice Ceremony</span></button>
                                                        <button id="btn-three" className="btn text-nowrap glow-button btn-three" onClick={getGalleryByAlbum} btn-active={(currentEvent === 'corporate')?"true":"false"} value="corporate"><span>Corporate</span></button>
                                                        <button id="btn-four" className="btn text-nowrap glow-button btn-four" onClick={getGalleryByAlbum} btn-active={(currentEvent === 'birthday')?"true":"false"} value="birthday"><span>Birthday</span></button>
                                                        <button id="btn-five" className="btn text-nowrap glow-button btn-five" onClick={getGalleryByAlbum} btn-active={(currentEvent === 'engagement')?"true":"false"} value="engagement"><span>Engagement</span></button>
                                                        <button id="btn-six" className="btn text-nowrap glow-button btn-six" onClick={getGalleryByAlbum} btn-active={(currentEvent === 'others')?"true":"false"} value="others"><span>Others</span></button>
                                                    </div>
                                                    <div className="btn-for-scroll">
                                                        <button className="chevron-right-button" onClick={() => catFilterScroll('right')}><i className="fa fa-lg fa-chevron-right"></i></button>
                                                    </div>
                                                </div>
                                                <div className="sort-by-filter-section-wrap">
                                                    <div className="sort-by-filter-section">
                                                        <div className="dropdown sort-by-btn-section">
                                                            <button className="btn btn-secondary dropdown-toggle sort-by-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                Sort By
                                                            </button>
                                                            <ul className="dropdown-menu dropdown-area-expand" aria-labelledby="dropdownMenuButton1" style={{padding : "10px", color: "#4b4b4b", fontweight: "500"}}>
                                                                <li>
                                                                    <div className="form-check form-check-inline sort-by-form-check">
                                                                        <label className="form-check-label" htmlFor="inlineRadio1">Default</label>
                                                                        <input className="form-check-input-sort-by" type="radio" name="radiobtnsortby" id="defaultSortBy" onChange={getSortByInput} value="default" defaultChecked/>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="form-check form-check-inline sort-by-form-check">
                                                                        <label className="form-check-label" htmlFor="inlineRadio2">Most Recent</label>
                                                                        <input className="form-check-input-sort-by" type="radio" name="radiobtnsortby" id="radio-btn2" onChange={getSortByInput} value="rating"/>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="form-check form-check-inline sort-by-form-check">
                                                                        <label className="form-check-label" htmlFor="inlineRadio3">Most Liked</label>
                                                                        <input className="form-check-input-sort-by" type="radio" name="radiobtnsortby" id="radio-btn3" onChange={getSortByInput} value="delivery-time"/>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="file-type-option">
                                                            <button className="btn btn-secondary dropdown-toggle filter-by-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                Filter By
                                                            </button>
                                                            <ul className="dropdown-menu dropdown-area-expand" aria-labelledby="dropdownMenuButton1" style={{padding : "10px", color: "#4b4b4b", fontweight: "500"}}>
                                                                <li>
                                                                    <div className="form-check form-check-inline filter-by-form-check">
                                                                        <label className="form-check-label" htmlFor="inlineRadio1">Mix</label>
                                                                        <input className="form-check-input-filter-by" type="radio" name="radiobtnfilterby" id="defaultFilterBy" onChange={getFilterByInput} value="mix" defaultChecked/>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="form-check form-check-inline filter-by-form-check">
                                                                        <label className="form-check-label" htmlFor="inlineRadio2">Images</label>
                                                                        <input className="form-check-input-filter-by" type="radio" name="radiobtnfilterby" id="filter-by-radio-btn2" onChange={getFilterByInput} value="image"/>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="form-check form-check-inline filter-by-form-check">
                                                                        <label className="form-check-label" htmlFor="inlineRadio3">Video</label>
                                                                        <input className="form-check-input-filter-by" type="radio" name="radiobtnfilterby" id="filter-by-radio-btn3" onChange={getFilterByInput} value="video"/>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <button className="btn load-all-img" onClick={loadAllImg}>All Image</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="show-images-section">
                                                {
                                                    (getFilteredItemList.length > 0)?
                                                    <div className="show-images">
                                                        {
                                                            getFilteredItemList.map((data,index)=>{
                                                                return(
                                                                    <>
                                                                        {
                                                                            (data.file_type === "video")?
                                                                            <div className={"gallery-img gallery-yt-video span-1-by-1 img-"+index} key={data._id}>
                                                                                <iframe height="200px" width="200px" className="yt-video-iframe" src={data.file_src} title="YouTube video player" frameborder="0" style={{borderRadius:"6px", color:"black"}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" data-aos="zoom-in" data-aos-offset="50" data-aos-duration="1500"></iframe>
                                                                            </div>
                                                                            :
                                                                            <div className={"gallery-img img-"+index} key={data._id}>
                                                                                <img src={data.file_src} className="w-100 album-img" alt={data.alt_tag} data-aos="zoom-in" data-aos-offset="50" data-aos-duration="1500" style={{color:"black"}}/>
                                                                                <button className="btn full-screen-btn" data-bs-target="#imgViewCarousel" data-bs-slide-to={index} onClick={openImageModal} value={index}><i className="fa fa-expand" style={{fontSize:"24px", color:"white"}}></i></button>
                                                                            </div>
                                                                        }
                                                                    </>
                                                                    
                                                                )
                                                            })
                                                        
                                                        }
                                                    </div>
                                                    :
                                                    <div className="no-image-found mt-3 mb-3" style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                                                        <div className="no-img-section">
                                                            <img src={NoImgIcon} alt="noimgicon" className="w-100"/>
                                                        </div>
                                                        <p className="mt-2" style={{fontWeight:"700", color:"grey"}}>No image Found by the applied filter.</p>
                                                    </div>
                                                }
                                            </div>
                                        </div>
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
                            <>
                                {
                                    (imageModal === "show")?
                                    <ImageCarouselViewBoxModal imageModal={imageModal} currentImgIndex={currentImgIndex} closeImageModal={closeImageModal} getFilteredItemList={getFilteredItemList}/>
                                    :
                                    <></>
                                }
                            </>
                        </div>
                    )
                }
            </div>
            <GoToTop/>
        </div>
    )
}