import React from "react";
import CreatableSelect from 'react-select/creatable';
import Constant_Variables from "../controller/constant-variables";

export default function CreateableFormSection({mealMenuInputs,handlemealMenuInputChange, mealMenuAddChange, mealMenuDeleteChange }){
    return(
        <>
            {mealMenuInputs.map((item, index) => (
                <div className="row" style={(index!==0)?{borderTop:"15px solid white"}:{}} key={index}>
                    <div className="col-md-6 col-sm-12 new-form-field mb-3">
                        <label htmlFor="mealType" className="form-label">Meal Type<span style={{color:"red"}}>*</span></label>
                        <select className="form-select" id="mealType" name="mealType" onChange={(e)=>handlemealMenuInputChange(e,index)} value={(item.mealType !== '')?item.mealType:''} select-color={item.mealType === ''?'novalue':'withvalue'}>
                            <option disabled value="">Select a meal...</option>
                            {
                                Constant_Variables.meal_type.map((data,i)=>{
                                    return(
                                        <option value={data.value} key={i}>{data.label}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="col-md-6 col-sm-12 new-form-field mb-3">
                        <label htmlFor="totalPlateCount" className="form-label">Total Plate Count</label>
                        <input type="text" className="form-control" id="totalPlateCount" name="totalPlateCount" maxLength={4} placeholder="Enter the approx number of People"  value={(item.totalPlateCount !== '')?item.totalPlateCount:''} onChange={(e)=>handlemealMenuInputChange(e,index)}/>
                    </div>
                    <div className="col-md-6 col-sm-12 new-form-field mb-3">
                        <label htmlFor="vegPlateCount" className="form-label">No. of Veg Pax</label>
                        <input type="text" className="form-control" id="vegPlateCount" name="vegPlateCount" maxLength={4} placeholder="Enter the approx number of People" value={(item.vegPlateCount !== '')? item.vegPlateCount:''} onChange={(e)=>handlemealMenuInputChange(e,index)}/>
                    </div>
                    <div className="col-md-6 col-sm-12 new-form-field mb-3" style={{display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
                        <label htmlFor="servingType" className="form-label">Serving Type<span style={{color:"red"}}>*</span></label>
                        <div className="meals-field-section">
                            <div className="form-check mt-1 mb-2 me-4 ml-0">
                                <input className="form-check-input" type="checkbox" name="servingType" value="buffet" id="flexCheckDefault" onChange={(e)=>{handlemealMenuInputChange(e,index, 'servingType')}}/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">&nbsp; Buffet</label>
                            </div>
                            <div className="form-check mt-1 mb-2 me-4">
                                <input className="form-check-input" type="checkbox" name="servingType" value="serving" id="flexCheckDefault" onChange={(e)=>{handlemealMenuInputChange(e,index, 'servingType')}} defaultChecked/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">&nbsp; Serving</label>
                            </div>
                            <div className="form-check mt-1 mb-2 me-4">
                                <input className="form-check-input" type="checkbox" name="servingType" value="moving" id="flexCheckDefault" onChange={(e)=>{handlemealMenuInputChange(e,index, 'servingType')}}/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">&nbsp; Moving</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 new-form-field live-counters-field mb-3" name="liveCounters" style={{display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
                        <label htmlFor="liveCounters" className="form-label">Live Counters</label>
                        <CreatableSelect
                            // defaultValue={[colourOptions[1], colourOptions[3]]}
                            isMulti
                            name="liveCounters"
                            options={Constant_Variables.live_stalls}
                            value={(item.liveCounters.length>0)?item.liveCounters:[]}
                            // value={(item.liveCounters.length>0)?item.liveCounters.filter((c) => Constant_Variables.live_stalls.includes(c.value)):''} //store only value except new created value
                            // components={{ ClearIndicator: () => <div></div> }}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            placeholder="Add food stalls..."
                            onChange={(e)=>handlemealMenuInputChange(e,index,'liveCounters')}
                        />
                    </div>
                    <div className="col-md-12 col-sm-12 new-form-field live-counters-field mb-3" name="foodMenu" style={{display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
                        <label htmlFor="foodMenu" className="form-label">Menu<span style={{color:"red"}}>*</span></label>
                        <CreatableSelect
                            // defaultValue={[colourOptions[1], colourOptions[3]]}
                            isMulti
                            name="foodMenu"
                            options={Constant_Variables.event_meals_menu}
                            value={(item.foodMenu.length>0)?item.foodMenu:''} // store whole option body
                            // value={(item.foodMenu.length>0)?Constant_Variables.event_meals_menu.filter((c) => item.foodMenu.includes(c.value)):''}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            placeholder="Add food item..."
                            onChange={(e)=>handlemealMenuInputChange(e,index,'foodMenu')}
                        />
                    </div>
                    <div className="col-md-12 col-sm-12 new-form-field user-comment-field mb-3">
                        <label htmlFor="userNote" className="form-label">Comments</label>
                        <textarea id="userNote" name="userNote" placeholder="Leave a note here..." value={item.userNote} onChange={(e)=>handlemealMenuInputChange(e,index)}></textarea>
                    </div>
                    <div className="col-sm-12 add-delete-btn-section mb-2" style={{display:"flex", flexDirection:"row", justifyContent:"right", gap:"10px"}}>
                        {index === mealMenuInputs.length - 1 && (
                            <button className="btn btn-success" onClick={(e) => mealMenuAddChange(e)}>Add More</button>
                        )}
                        {mealMenuInputs.length > 1 && (
                            <button className="btn btn-danger" onClick={(e) => mealMenuDeleteChange(e,index)}>Delete</button>
                        )}
                    </div>
                </div>
            ))}
        </>
    )
}