import React from "react";

export default function ImageViewBoxModal({imageModal, openImageModal, closeImageModal, getFilteredItemList}){
    return(
        <div className="img-view-modal" id="imageViewBox" show-modal={imageModal}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="zoom-in"><i class="fa fa-search-plus"></i></button>
                        <button type="button" className="zoom-out"><i class="fa fa-search-minus"></i></button>
                        <button type="button" className="img-view-modal-close" onClick={closeImageModal}>X</button>
                    </div>
                    <div className="modal-body">
                        <div id="imgViewCarousel" className="carousel slide" data-bs-interval="false">

                            <div className="carousel-inner">
                                {
                                    (getFilteredItemList.length>0)?
                                    <>
                                        {
                                            getFilteredItemList.map((item,i)=>{
                                                return(
                                                    <div className={(i==0)?"carousel-item carousel-item-style active":"carousel-item carousel-item-style"} key={item._id}>
                                                        <img src={item.file_src} alt={item.alt_tag} className="d-block w-100 carousel-item-img"/>
                                                        {/* <h5>Mairage Function, Rajarhat, Kolkata</h5> */}
                                                    </div>
                                                )
                                            })
                                        }
                                    </>
                                    
                                    :
                                    <div><p>No Image Found!!</p></div>
                                }
                            </div>

                            <button className="carousel-control-prev" type="button" data-bs-target="#imgViewCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#imgViewCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}