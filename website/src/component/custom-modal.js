import React from "react";

export default function CustomModal({imageModal, openImageModal, closeImageModal}){
    return(
        <div className="modal fade" id="customModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" show-modal={imageModal}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="login-modal-close" data-bs-dismiss="modal">X</button>
                    </div>
                    <div className="modal-body">
                        <div>
                            <img src="https://img.perceptpixel.com/pykhlszs/riya_caterer/delivery.webp" className="w-100" alt="event"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}