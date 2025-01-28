import React from "react";
import { TransformWrapper, TransformComponent} from "react-zoom-pan-pinch";
import fullScreenSymbol from "../assets/images/fullScreenIcon.svg";

export default function ImageCarouselViewBoxModal({imageModal, currentImgIndex, closeImageModal, getFilteredItemList}){
    // const Controls = () => {
    //     const { zoomIn, zoomOut, resetTransform } = useControls();
    //     return (
    //       <div className="tools">
    //         <button onClick={() => zoomIn()}>+</button>
    //         <button onClick={() => zoomOut()}>-</button>
    //         <button onClick={() => resetTransform()}>x</button>
    //       </div>
    //     );
    // };

    function toggleFullScreen(event){
        let ele_id              = "fullScreenEle-"+event.currentTarget.value;
        var elem                = document.getElementById(ele_id);
        var check_full_screen   = document.fullscreenElement;

        let carouselCtrlLBtnId   = "carousel-control-lbtn-"+event.currentTarget.value;
        let carouselControlLBtn  = document.getElementById(carouselCtrlLBtnId);
        let carouselCtrlRBtnId   = "carousel-control-rbtn-"+event.currentTarget.value;
        let carouselControlRBtn  = document.getElementById(carouselCtrlRBtnId);
        if(check_full_screen !== null){
            carouselControlLBtn.style.display="block";
            carouselControlRBtn.style.display="block";
            if (document.exitFullscreen){
                document.exitFullscreen();
            }else if (document.webkitExitFullscreen){ //Safari
                document.webkitExitFullscreen();
            }else if (document.mozCancelFullScreen) { // Firefox
                document.mozCancelFullScreen();
              }else if (document.msExitFullscreen){ // IE/Edge
                document.msExitFullscreen();
            }
        }else{
            carouselControlLBtn.style.display="none";
            carouselControlRBtn.style.display="none";
            if(elem.requestFullscreen){
                elem.requestFullscreen();
            }else if (elem.mozRequestFullScreen){
                elem.mozRequestFullScreen();     // Firefox
            }else if (elem.webkitRequestFullscreen){
                elem.webkitRequestFullscreen();  // Safari
            }else if(elem.msRequestFullscreen){
                elem.msRequestFullscreen();      // IE/Edge
            }
        }
    }
    return(
        <div className="img-view-modal" id="imageViewBox" show-modal={imageModal}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="img-view-modal-close" onClick={closeImageModal}>X</button>
                    </div>
                    <div className="modal-body">
                        <div id="imgViewCarousel" className="carousel slide img-gallery-modal-carousel" data-bs-interval="false">
                            <div className="carousel-inner gallery-modal-carousel-inner">
                                {
                                    (getFilteredItemList.length>0)?
                                    <>
                                        {
                                            getFilteredItemList.map((item,i)=>{
                                                return(
                                                    <div className={(i==currentImgIndex)?"carousel-item carousel-item-style active":"carousel-item carousel-item-style"} key={item._id}>
                                                        <>
                                                            {
                                                                (item.file_type !== "video")?
                                                                <div className="carousel-item-body">
                                                                    <h5>Mairage Function, Rajarhat, Kolkata</h5>
                                                                    <div className="img-content-section" id={"fullScreenEle-"+i}>
                                                                        <div className="full-screen-wrap" id={"wrap-container-"+i} style={{width:"100%", height:"100%"}}>
                                                                            {/* <img src={item.file_src} alt={item.alt_tag} className="d-block carousel-item-img" style={{width:"auto", maxWidth:"100%"}} id={"image-"+i} onMouseMove={move} onMouseDown={(e)=>{startDragging(e,i)}} onMouseUp={(e)=>{stopDragging(e,i)}} onMouseLeave={(e)=>{stopDragging(e,i)}} value={i} onDoubleClick={(e)=>{zoomIn(e,i)}}/> */}
                                                                            <TransformWrapper
                                                                                initialScale={1}
                                                                                // centerContent={false}
                                                                                maxScale={4}
                                                                                initialPositionX={0}
                                                                                initialPositionY={0}
                                                                                initialPositionZ={0}
                                                                                wheel={{ step: 100 }}
                                                                                centerOnInit={true}
                                                                                centerZoomedOut={true}
                                                                            >
                                                                                {(
                                                                                    { zoomIn, zoomOut, resetTransform, ...rest }) => (
                                                                                    <>
                                                                                        {/* <Controls /> */}
                                                                                        <TransformComponent
                                                                                            // wrapperStyle={{
                                                                                            //     width: "100%",
                                                                                            //     height: "100%",
                                                                                            // }}
                                                                                        >
                                                                                            <img src={item.file_src} alt={item.alt_tag} className="d-block carousel-item-img" id={"image-"+i} style={{maxWidth:"100%"}}/>
                                                                                        </TransformComponent>
                                                                                        <div className="image-view-box-controller">
                                                                                            <button type="button" className="zoom-in" onClick={()=>{zoomIn()}} value={i}><i className="fa fa-search-plus" style={{height:"21px", width:"21px"}}></i></button>
                                                                                            <button type="button" className="zoom-out" onClick={()=>{zoomOut()}} value={i}><i className="fa fa-search-minus"style={{height:"21px", width:"21px"}}></i></button>
                                                                                            <button type="button" className="full-screen" onClick={(e)=>{toggleFullScreen(e);resetTransform();}} value={i}><img src={fullScreenSymbol} alt="Full-Screen" className="w-100 full-screen-icon"/></button>
                                                                                            <button onClick={() => {resetTransform()}}>x</button>
                                                                                        </div>
                                                                                        <button className="carousel-control-prev" type="button" data-bs-target="#imgViewCarousel" data-bs-slide="prev" id={"carousel-control-lbtn-"+i} onClick={() => {resetTransform()}}>
                                                                                            <span><i className="fa fa-caret-left" style={{fontSize:"48px", color:"#f4be00"}}></i></span>
                                                                                        </button>
                                                                                        <button className="carousel-control-next" type="button" data-bs-target="#imgViewCarousel" data-bs-slide="next" id={"carousel-control-rbtn-"+i} onClick={() => {resetTransform()}}>
                                                                                            <span><i className="fa fa-caret-right" style={{fontSize:"48px", color:"#f4be00"}}></i></span>
                                                                                        </button>
                                                                                    </>
                                                                                )}
                                                                            </TransformWrapper>
                                                                        </div>
                                                                        {/* <div className="image-view-box-controller">
                                                                            <button type="button" className="zoom-in" onClick={(e)=>{zoomIn(e,i)}} value={i}><i className="fa fa-search-plus" style={{height:"21px", width:"21px"}}></i></button>
                                                                            <button type="button" className="zoom-out" onClick={(e)=>{zoomOut(e,i)}} value={i}><i className="fa fa-search-minus"style={{height:"21px", width:"21px"}}></i></button>
                                                                            <button type="button" className="full-screen" onClick={toggleFullScreen} value={i}><img src={fullScreenSymbol} alt="Full-Screen" className="w-100 full-screen-icon"/></button>
                                                                        </div> */}
                                                                    </div>
                                                                </div>
                                                                :
                                                                <div className="carousel-item-body carousel-video-item-body">
                                                                    <h5>Mairage Function, Rajarhat, Kolkata</h5>
                                                                    <iframe width="200px" height="auto" className="carousel-item-video" src={item.file_src+"&rel=0"} title="YouTube video player" frame-border="0" style={{borderRadius:"12px"}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen=""></iframe>
                                                                    <button className="carousel-control-prev" type="button" data-bs-target="#imgViewCarousel" data-bs-slide="prev" id={"carousel-control-lbtn-"+i}>
                                                                        <span><i className="fa fa-caret-left" style={{fontSize:"48px", color:"#f4be00"}}></i></span>
                                                                    </button>
                                                                    <button className="carousel-control-next" type="button" data-bs-target="#imgViewCarousel" data-bs-slide="next" id={"carousel-control-rbtn-"+i}>
                                                                        <span><i className="fa fa-caret-right" style={{fontSize:"48px", color:"#f4be00"}}></i></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                        </>
                                                    </div>
                                                )
                                            })
                                        }
                                    </>
                                    
                                    :
                                    <div><p>No Image Found!!</p></div>
                                }
                            </div>

                            {/* <button className="carousel-control-prev" type="button" data-bs-target="#imgViewCarousel" data-bs-slide="prev" onClick={() => resetTransform()}>
                                <span><i className="fa fa-caret-left" style={{fontSize:"48px", color:"#f4be00"}}></i></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#imgViewCarousel" data-bs-slide="next" onClick={() => resetTransform()}>
                                <span><i className="fa fa-caret-right" style={{fontSize:"48px", color:"#f4be00"}}></i></span>
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}