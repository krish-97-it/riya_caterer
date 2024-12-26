import React,{useState} from "react";
import fullScreenSymbol from "../assets/images/fullScreenIcon.svg";

export default function ImageViewBoxModal({imageModal, currentImgIndex, closeImageModal, getFilteredItemList}){

    function toggleFullScreen(event){
        let ele_id              = "fullScreenEle-"+event.currentTarget.value;
        var elem                = document.getElementById(ele_id);
        var check_full_screen   = document.fullscreenElement;
 
        if(check_full_screen !== null){
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

    let [orgWidth, setOrgWidth]   = useState(null);
    let [orgHeight, setOrgHeight] = useState(null);
    let [activeImgId, setActiveImgId] = useState(null);
    function zoomIn(event,index){
        let ele_id           = "image-"+index;
        var elem             = document.getElementById(ele_id);
        
        let width            = elem.clientWidth;
        let height           = elem.clientHeight;

        if(orgWidth === null && orgHeight === null){
            setOrgWidth(width);
            setOrgHeight(height);
            setActiveImgId(ele_id);
            elem.style.width = (width + 50) + "px";
            elem.style.height = (height + 50) + "px";
            elem.style.maxWidth  = (width + 50) + "px";
            // elem.style.height="100%";
        }else{
            if(width <= (orgWidth+550)){
                elem.style.width = (width + 50) + "px";
                elem.style.height = (height + 50) + "px";
                elem.style.maxWidth  = (width + 50) + "px";
                // elem.style.height=100%;
            }else{
                console.log("10x zoom reached");
            }
        }
        // elem.style["transition-duration"]= "300ms";
        // elem.style["transform"] = "translate3d(0px, 0px, 0px) scale(3)";
    }
     function zoomOut(event,index) {
        let ele_id           = "image-"+index;
        var elem             = document.getElementById(ele_id);
        let width            = elem.clientWidth;
        let height           = elem.clientHeight;
        if(orgWidth === null && orgHeight === null){
            setOrgWidth(width);
            setOrgHeight(height);
            setActiveImgId(ele_id);
        }else{
            if(width > orgWidth){
                elem.style.width = (width - 50) + "px";
                elem.style.height = (height - 50) + "px";
                elem.style.maxWidth  = (width + 50) + "px";
            }else{
                elem.style.width = "auto";
                elem.style.height="auto";
                elem.style.maxWidth = "100%";
            }
        }
        // elem.style["transition-duration"]= "300ms";
        // elem.style["transform"] = "translate3d(0px, 0px, 0px) scale(1)";
    }

    function resetZoomFilter(){
        if(orgHeight !== null){
            let ele_id           = activeImgId;
            var elem             = document.getElementById(ele_id);
            elem.style.width = "auto";
            elem.style.height="auto";
            elem.style.maxWidth = "100%";
            setOrgWidth(null);
            setOrgHeight(null);
            setActiveImgId(null);
        }
    }

    // let [mouseDown, setMouseDown] = useState(false);
    // let startX, scrollLeft;
    // const startDragging = (e,index) => {
    //     let parentId = "#fullScreenEle-"+index;
    //     let slider   = document.querySelectorAll(parentId);
    //     console.log(slider);
    //     console.log(parentId);
    //     console.log(slider.offsetLeft);
    //     setMouseDown(true);
    //     startX = e.pageX - slider.offsetLeft;
    //     scrollLeft = slider.scrollLeft;
    // }
      
    // const stopDragging = (e) => {
    //     setMouseDown(false);
    // }
      
    // const move = (e,index) => {
    //     e.preventDefault();
    //     let parentId = "#fullScreenEle-"+index;
    //     let slider   = document.querySelectorAll(parentId);
    //     console.log(slider);
    //     if(!mouseDown){ 
    //         return; 
    //     }
    //     const x = e.pageX - slider.offsetLeft;
    //     console.log(x);
    //     const scroll = x - startX;
    //     slider.scrollLeft = scrollLeft - scroll;
    // }

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
                                                                        <div className="full-screen-wrap">
                                                                            {/* <img src={item.file_src} alt={item.alt_tag} className="d-block carousel-item-img" style={{width:"auto", maxWidth:"100%"}} id={"image-"+i} onMouseMove={move} onMouseDown={(e)=>{startDragging(e,i)}} onMouseUp={(e)=>{stopDragging(e,i)}} onMouseLeave={(e)=>{stopDragging(e,i)}} value={i}/> */}
                                                                            <img src={item.file_src} alt={item.alt_tag} className="d-block carousel-item-img" style={{width:"auto", maxWidth:"100%"}} id={"image-"+i} value={i} onDoubleClick={(e)=>{zoomIn(e,i)}}/>
                                                                        </div>
                                                                        <div className="image-view-box-controller">
                                                                            <button type="button" className="zoom-in" onClick={(e)=>{zoomIn(e,i)}} value={i}><i className="fa fa-search-plus" style={{height:"21px", width:"21px"}}></i></button>
                                                                            <button type="button" className="zoom-out" onClick={(e)=>{zoomOut(e,i)}} value={i}><i className="fa fa-search-minus"style={{height:"21px", width:"21px"}}></i></button>
                                                                            <button type="button" className="full-screen" onClick={toggleFullScreen} value={i}><img src={fullScreenSymbol} alt="Full-Screen" className="w-100 full-screen-icon"/></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                :
                                                                <div className="carousel-item-body carousel-video-item-body">
                                                                    <h5>Mairage Function, Rajarhat, Kolkata</h5>
                                                                    <iframe width="200px" height="auto" className="carousel-item-video" src={item.file_src+"&rel=0"} title="YouTube video player"frameborder="0" style={{borderRadius:"12px"}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
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

                            <button className="carousel-control-prev" type="button" data-bs-target="#imgViewCarousel" data-bs-slide="prev" onClick={resetZoomFilter}>
                                <span><i className="fa fa-caret-left" style={{fontSize:"48px", color:"#f4be00"}}></i></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#imgViewCarousel" data-bs-slide="next" onClick={resetZoomFilter}>
                                <span><i className="fa fa-caret-right" style={{fontSize:"48px", color:"#f4be00"}}></i></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}