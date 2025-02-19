import React from "react";

function GalleryCarousel(){
    return(
        <div className="wrap-gallery" data-aos="zoom-in" data-aos-offset="50" data-aos-duration="1200">
            <div className="image-album-cover">
                <div id="galleryCarousel" className="gallery-img-Carousel carousel slide" data-bs-ride="carousel">

                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="2"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item carousel-item-style active">
                            <img src="https://img.perceptpixel.com/pykhlszs/riya_caterer/bg-image-twenty.webp" alt="wedding" className="d-block w-100 carousel-item-img"/>
                            <h5>Mairage Function, Rajarhat, Kolkata</h5>
                        </div>
                        <div className="carousel-item carousel-item-style">
                            <img src="https://img.perceptpixel.com/pykhlszs/riya_caterer/gallery-banner.webp" alt="get together" className="d-block w-100 carousel-item-img"/>
                            <h5>Rice Ceremony, Belgachia, Kolkata</h5>
                        </div>
                        <div className="carousel-item carousel-item-style">
                            <img src="https://img.perceptpixel.com/pykhlszs/riya_caterer/many-food.webp" alt="birthay" className="d-block w-100 carousel-item-img"/>
                            <h5>Food Delivery, Tangra, Kolkata</h5>
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GalleryCarousel;