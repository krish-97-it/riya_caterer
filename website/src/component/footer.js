import React from "react";

export default function Footer(){
    return(
        <footer className="text-center text-lg-start bg-body-tertiary text-muted">
            <section className="border-bottom">
                <div className="container text-center text-md-start">
                    <div className="row pt-3">
                        <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-2">
                                Riya Caterer
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                            <div className="mt-2">
                                <div className="fw-bold d-none d-sm-block">
                                    <span>Follow Us On:</span>
                                </div>
                                <div>
                                    <a href="" className="me-4">
                                        <i className="fa fa-facebook-f"></i>
                                    </a>
                                    <a href="" className="me-4">
                                        <i className="fa fa-google"></i>
                                    </a>
                                    <a href="" className="me-4">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                    <a href="" className="">
                                        <i className="fa fa-whatsapp"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2">
                            <h6 className="text-uppercase fw-bold mb-2">
                                Products
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Angular</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">React</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Vue</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Laravel</a>
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2">
                            <h6 className="text-uppercase fw-bold mb-2">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Help</a>
                            </p>
                        </div>
                       
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2">
                            <h6 className="text-uppercase fw-bold mb-2">Contact</h6>
                            <p><i className="fa fa-home me-3"></i> New York, NY 10012, US</p>
                            <p>
                                <i className="fa fa-envelope me-3"></i>
                                info@example.com
                            </p>
                            <p><i className="fa fa-phone me-3"></i> + 01 234 567 88</p>
                            <p><i className="fa fa-print me-3"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-2" style={{backgroundColor: "rgb(0 0 0)"}}>
                © 2021 Copyright: 
                <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> riya-caterer.com</a>
            </div>
        </footer>
    )
}