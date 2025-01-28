import React from "react";
import Constant_Variables from "../controller/constant-variables";
// import { Link } from "react-router-dom";

export default function FoodMenus(){

    // function scrollToSection(id){
    //     const section = document.querySelector(id);
    //     setTimeout(function(){
    //         section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    //     },500)
    // }

    return(
        <div className="container">
            <p className="menu-intro-p" style={{fontFamily:"Proxima Soft Semibold"}}>We provide a wide range of food options to you. Explore more than 250+ food menu across different category.</p>
            <div className="accordion accordion-flush explore-menu-accordion" id="exploreMenuAccordion">
                <div className="accordion-item mb-2">
                    <h5 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#menuCatOne" aria-expanded="true" aria-controls="menuCatOne" >
                            <span>Beverages & Drink</span>
                            <span className="view-btn">View</span>
                        </button>
                    </h5>
                    <div id="menuCatOne" className="accordion-collapse collapse show" >
                        <div className="row">
                            {
                                Constant_Variables.event_meals_menu.map((item,i)=>{
                                    return(
                                        <>
                                            {
                                                (item.category === "Beverages & Drinks")?
                                                <>
                                                    
                                                    <div className="menu-item-section col-6 col-sm-6 col-md-4 col-lg-3" key={i}>
                                                        <div className="menu-body-wrap">
                                                            <p>{item.label}</p>
                                                        </div>
                                                    </div>
                                                </>
                                                :
                                                <></>
                                                
                                            }
                                        
                                        </>
                                        
                                    )
                                })
                            }
                            <div className="menu-item-section col-6 col-sm-6 col-md-4 col-lg-3">
                                <div className="menu-body-wrap">
                                    <p>And More...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item mb-2">
                    <h5 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#menuCatTwo" aria-expanded="false" aria-controls="menuCatTwo" >
                            <span>Salad & Raita</span>
                            <span className="view-btn">View</span>
                        </button>
                    </h5>
                    <div id="menuCatTwo" className="accordion-collapse collapse" >
                        <div className="row">
                            {
                                Constant_Variables.event_meals_menu.map((item,i)=>{
                                    return(
                                        <>
                                            {
                                                (item.category === "Salad & Raita")?
                                                <>
                                                    
                                                    <div className="menu-item-section col-6 col-sm-6 col-md-4 col-lg-3" key={i}>
                                                        <div className="menu-body-wrap">
                                                            <p>{item.label}</p>
                                                        </div>
                                                    </div>
                                                </>
                                                :
                                                <></>
                                                
                                            }
                                        
                                        </>
                                        
                                    )
                                })
                            }
                            <div className="menu-item-section col-6 col-sm-6 col-md-4 col-lg-3">
                                <div className="menu-body-wrap">
                                    <p>And More...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item mb-2">
                    <h5 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#menuCatThree" aria-expanded="false" aria-controls="menuCatThree" >
                            <span>Appetizer & Snacks</span>
                            <span className="view-btn">View</span>
                        </button>
                    </h5>
                    <div id="menuCatThree" className="accordion-collapse collapse" >
                        <div className="row">
                            {
                                Constant_Variables.event_meals_menu.map((item,i)=>{
                                    return(
                                        <>
                                            {
                                                (item.category === "Appetizer & Snacks")?
                                                <>
                                                    
                                                    <div className="menu-item-section col-6 col-sm-6 col-md-4 col-lg-3" key={i}>
                                                        <div className="menu-body-wrap">
                                                            <p>{item.label}</p>
                                                        </div>
                                                    </div>
                                                </>
                                                :
                                                <></>
                                                
                                            }
                                        
                                        </>
                                        
                                    )
                                })
                            }
                            <div className="menu-item-section col-6 col-sm-6 col-md-4 col-lg-3">
                                <div className="menu-body-wrap">
                                    <p>And More...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item mb-2">
                    <h5 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#menuCatFour" aria-expanded="false" aria-controls="menuCatFour" >
                            <span>Chinese & Continental</span>
                            <span className="view-btn">View</span>
                        </button>
                    </h5>
                    <div id="menuCatFour" className="accordion-collapse collapse" >
                        <div className="row">
                            {
                                Constant_Variables.event_meals_menu.map((item,i)=>{
                                    return(
                                        <>
                                            {
                                                (item.category === "Chinese & Continental")?
                                                <>
                                                    
                                                    <div className="menu-item-section col-6 col-sm-6 col-md-4 col-lg-3" key={i}>
                                                        <div className="menu-body-wrap">
                                                            <p>{item.label}</p>
                                                        </div>
                                                    </div>
                                                </>
                                                :
                                                <></>
                                                
                                            }
                                        
                                        </>
                                        
                                    )
                                })
                            }
                            <div className="menu-item-section col-6 col-sm-6 col-md-4 col-lg-3">
                                <div className="menu-body-wrap">
                                    <p>And More...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item mb-2">
                    <h5 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#menuCatFive" aria-expanded="false" aria-controls="menuCatFive" >
                            <span>Indian Breads & Rotis</span>
                            <span className="view-btn">View</span>
                        </button>
                    </h5>
                    <div id="menuCatFive" className="accordion-collapse collapse" >
                        <div className="row">
                            {
                                Constant_Variables.event_meals_menu.map((item,i)=>{
                                    return(
                                        <>
                                            {
                                                (item.category === "Indian Breads & Roti")?
                                                <>
                                                    
                                                    <div className="menu-item-section col-6 col-sm-6 col-md-4 col-lg-3" key={i}>
                                                        <div className="menu-body-wrap">
                                                            <p>{item.label}</p>
                                                        </div>
                                                    </div>
                                                </>
                                                :
                                                <></>
                                                
                                            }
                                        
                                        </>
                                        
                                    )
                                })
                            }
                            <div className="menu-item-section col-6 col-sm-6 col-md-4 col-lg-3">
                                <div className="menu-body-wrap">
                                    <p>And More...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item mb-2">
                    <h5 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#menuCatSix" aria-expanded="false" aria-controls="menuCatSix" >
                            <span>Indian Rice & Biryani</span>
                            <span className="view-btn">View</span>
                        </button>
                    </h5>
                    <div id="menuCatSix" className="accordion-collapse collapse" >
                        <div className="row">
                            {
                                Constant_Variables.event_meals_menu.map((item,i)=>{
                                    return(
                                        <>
                                            {
                                                (item.category === "Indian Rice & Biryani")?
                                                <>
                                                    
                                                    <div className="menu-item-section col-6 col-sm-6 col-md-4 col-lg-3" key={i}>
                                                        <div className="menu-body-wrap">
                                                            <p>{item.label}</p>
                                                        </div>
                                                    </div>
                                                </>
                                                :
                                                <></>
                                                
                                            }
                                        
                                        </>
                                        
                                    )
                                })
                            }
                            <div className="menu-item-section col-6 col-sm-6 col-md-4 col-lg-3">
                                <div className="menu-body-wrap">
                                    <p>And More...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item mb-2">
                    <h5 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#menuCatSeven" aria-expanded="false" aria-controls="menuCatSeven" >
                            <span>Side Dish & Gravy</span>
                            <span className="view-btn">View</span>
                        </button>
                    </h5>
                    <div id="menuCatSeven" className="accordion-collapse collapse" >
                        <div className="row">
                            {
                                Constant_Variables.event_meals_menu.map((item,i)=>{
                                    return(
                                        <>
                                            {
                                                (item.category === "Side Dish & Gravy")?
                                                <>
                                                    
                                                    <div className="menu-item-section col-6 col-sm-6 col-md-4 col-lg-3" key={i}>
                                                        <div className="menu-body-wrap">
                                                            <p>{item.label}</p>
                                                        </div>
                                                    </div>
                                                </>
                                                :
                                                <></>
                                                
                                            }
                                        
                                        </>
                                        
                                    )
                                })
                            }
                            <div className="menu-item-section col-6 col-sm-6 col-md-4 col-lg-3">
                                <div className="menu-body-wrap">
                                    <p>And More...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item mb-2">
                    <h5 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#menuCatEight" aria-expanded="false" aria-controls="menuCatEight" >
                            <span>Sweets & Dessert</span>
                            <span className="view-btn">View</span>
                        </button>
                    </h5>
                    <div id="menuCatEight" className="accordion-collapse collapse" >
                        <div className="row">
                            {
                                Constant_Variables.event_meals_menu.map((item,i)=>{
                                    return(
                                        <>
                                            {
                                                (item.category === "Sweets & Dessert")?
                                                <>
                                                    
                                                    <div className="menu-item-section col-6 col-sm-6 col-md-4 col-lg-3" key={i}>
                                                        <div className="menu-body-wrap">
                                                            <p>{item.label}</p>
                                                        </div>
                                                    </div>
                                                </>
                                                :
                                                <></>
                                                
                                            }
                                        
                                        </>
                                        
                                    )
                                })
                            }
                            <div className="menu-item-section col-6 col-sm-6 col-md-4 col-lg-3">
                                <div className="menu-body-wrap">
                                    <p>And More...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}