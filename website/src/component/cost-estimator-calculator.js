import React, { useState } from "react";
import Constant_Variables from "../controller/constant-variables";
import ValidationFunctions from "../controller/validation";
import Swal from 'sweetalert2';
// import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';

export default function CostCalculator(){
    const [menuData, setMenuData] = useState({
        plateCount:'',
        vegPlateCount:'',
        servingType:'serving',
        liveCounters:[],
        vegMenu:[],
        nonVegMenu:[],
    });

    const [palteCountErr, updatePlateCountErr]              = useState({});
    const [vegPlateCountErr, updateVegPlateCountErr]        = useState({});

    const [loadingMssg, setLoadingMssg]                     = useState("");
    const [isSubmit, setIsSubmit]                           = useState(false);
    const [msgStyle, setMsgStyle]                           = useState("success");

    // helps to validate and take input from user
    const handleInputChange = (e,field) => {

        if(field === 'plateCount'){
            let val = e.target.value;
            if(val.length <=4){
                setMenuData({...menuData, [field] : val});
                let isPlateCountValid = ValidationFunctions.requiredValidation("Total Plate Count",val,false);
                if(isPlateCountValid !== 'valid'){
                    updatePlateCountErr({...palteCountErr, err_mssg: isPlateCountValid, isValid: "invalid"})
                }else{
                    updatePlateCountErr({...palteCountErr, err_mssg: isPlateCountValid, isValid: "valid"})
                }
            }
        }else if(field === 'vegPlateCount'){
            let val = e.target.value;
            if(val.length <=4){
                setMenuData({...menuData, [field] : val});
                let isVegPlateCountValid = vegPlateCountValidation("Veg Plate Count",val,true);
                if(isVegPlateCountValid !== 'valid'){
                    updateVegPlateCountErr({...vegPlateCountErr, err_mssg: isVegPlateCountValid, isValid: "invalid"});
                }else{
                    updateVegPlateCountErr({...vegPlateCountErr, err_mssg: isVegPlateCountValid, isValid: "optional"});
                }
            }
        }else if(field === 'servingType'){
            let ele_val     =   e.target.value;
            setMenuData({...menuData, [field] : ele_val});
        }else if(field === 'liveCounters'){
            let new_arr = e.map((item) => item);
            setMenuData({...menuData, [field] : new_arr});
        }else if(field === 'vegMenu'){
            let new_arr = e.map((item) => item);
            setMenuData({...menuData, [field] : new_arr});
        }else if(field === 'nonVegMenu'){
            let new_arr = e.map((item) => item);
            setMenuData({...menuData, [field] : new_arr});
        }
    };

    function onSubmitValidation(data){

        let isPlateCountValid = ValidationFunctions.requiredValidation("Total Plate Count",data.plateCount,false);
        if(isPlateCountValid !== 'valid'){
            updatePlateCountErr({...palteCountErr, err_mssg: isPlateCountValid, isValid: "invalid"})
            Swal.fire(
                {
                    title: "Failed!",
                    text: isPlateCountValid,
                    icon: "error"
                }
            )
        }else{
            updatePlateCountErr({...palteCountErr, err_mssg: isPlateCountValid, isValid: "valid"})
        }

        let isVegPlateCountValid = vegPlateCountValidation("Veg Plate Count",data.vegPlateCount,true);
        if(isVegPlateCountValid !== 'valid'){
            updateVegPlateCountErr({...vegPlateCountErr, err_mssg: isVegPlateCountValid, isValid: "invalid"});
            Swal.fire(
                {
                    title: "Failed!",
                    text: isVegPlateCountValid,
                    icon: "error"
                }
            )
        }else{
            updateVegPlateCountErr({...vegPlateCountErr, err_mssg: isVegPlateCountValid, isValid: "optional"});
        }


        if(isPlateCountValid === 'valid' && isVegPlateCountValid === 'valid'){
            let checkOthersValidation = getOthersValidation(data);
            if(checkOthersValidation === true){
                return true;
            }else{
                return false;
            }
        }

        return false;

    }

    function getOthersValidation(data){
        if( parseInt(data.plateCount) < 15){
            Swal.fire(
                {
                    title: "Failed!",
                    text : "Total Plate Count should be >= 15",
                    icon : "error"
                }
            )
            return false;
        }else if(data.nonVegMenu.length <= 0 && data.vegMenu.length <= 0){
            Swal.fire(
                {
                    title: "Failed!",
                    text : "No menu is added yet.",
                    icon : "error"
                }
            )
            return false;
        }else if( data.nonVegMenu.length <=0 && parseInt(data.vegPlateCount) < parseInt(data.plateCount)){
            Swal.fire(
                {
                    title: "Failed!",
                    text : "Please add menu for remaining non veg plate",
                    icon : "error"
                }
            )
            return false;
        }else if(parseInt(data.vegPlateCount) === parseInt(data.plateCount) && data.nonVegMenu.length > 0){
            Swal.fire(
                {
                    title: "Failed!",
                    text : "Total number of Plate is equals to total number of veg pax. Please remove menu for non veg pax",
                    icon : "error"
                }
            )
            return false;
        }else if(data.vegMenu.length >0 && data.vegMenu.length<2){
            Swal.fire(
                {
                    title: "Failed!",
                    text : "Minimum two food item should be added on veg pax menu",
                    icon : "error"
                }
            )
            return false;
        }else if(data.nonVegMenu.length >0 && data.nonVegMenu.length<2){
            Swal.fire(
                {
                    title: "Failed!",
                    text : "Minimum two food item should be added on non-veg pax menu",
                    icon : "error"
                }
            )
            return false;
        }else if( data.vegMenu.length <=0 && data.vegPlateCount !== ''){
            Swal.fire(
                {
                    title: "Failed!",
                    text : "You have mentioned number of veg pax. Please add menu for veg pax",
                    icon : "error"
                }
            )
            return false;
        }else if( data.vegMenu.length >0 && data.vegPlateCount === ''){
            Swal.fire(
                {
                    title: "Failed!",
                    text : "You have added menu for veg. Please add number of veg plate",
                    icon : "error"
                }
            )
            return false;
        }else{
            return true;
        }
    }

    // const [totalCost, setTotalCost]           = useState('0')
    // const [perPlateCost, setPerPlateCost]     = useState('0');
    function calculateTotalCost(e){
        e.preventDefault();
        let validationFlag = onSubmitValidation(menuData);
        if(validationFlag === true){
            // console.log(menuData);
            let veg_plate_cost          = (menuData.vegMenu.length > 0)?calculateMenuCost(menuData.vegMenu):0;
            let non_veg_plate_cost      = (parseInt(menuData.vegPlateCount) === parseInt(menuData.plateCount))?0:calculateMenuCost(menuData.nonVegMenu);
            let totalVegPlateCost       = (menuData.vegPlateCount !== '')? veg_plate_cost*(parseInt(menuData.vegPlateCount)):0;
            let totalNonVegPlateCost    = (menuData.vegPlateCount !== '')? non_veg_plate_cost*((parseInt(menuData.plateCount))-(parseInt(menuData.vegPlateCount))):non_veg_plate_cost*(parseInt(menuData.plateCount));
            let liveStallCost           = (menuData.liveCounters.length>0)?calculateMenuCost(menuData.liveCounters):0;
            let totalStallCost          = liveStallCost*(parseInt(menuData.plateCount)); 
            let service_charge          = (menuData.servingType === 'buffet')?evaluateServiceCharge((veg_plate_cost+non_veg_plate_cost+liveStallCost))+(10*menuData.plateCount):evaluateServiceCharge((veg_plate_cost+non_veg_plate_cost+liveStallCost));


            // console.log("veg plate cost- "+veg_plate_cost);
            // console.log("non veg plate cost- "+non_veg_plate_cost);
            // console.log("livestall cost- "+liveStallCost);
            // console.log("per plate cost cost- "+(veg_plate_cost+non_veg_plate_cost+liveStallCost));
            // console.log("service charge- "+service_charge);

            // console.log("total veg plate cost- "+totalVegPlateCost);
            // console.log("total stall cost- "+totalStallCost);
            // console.log("total non veg stall cost- "+totalNonVegPlateCost);

            // setPerPlateCost(veg_plate_cost+non_veg_plate_cost+liveStallCost);
            // setTotalCost(totalVegPlateCost+totalNonVegPlateCost+totalStallCost+service_charge);

            Swal.fire(
                {
                    title: "",
                    text : "Total expected Cost : "+(totalVegPlateCost+totalNonVegPlateCost+totalStallCost+service_charge),
                    icon : "success"
                }
            )
            
        }else{
            console.log("Something went wrong! Try again after sometimes")
        }
    }


    function evaluateServiceCharge(perPlateCost){
        if(parseInt(menuData.plateCount) < 100){
            if(perPlateCost < 100){
                return (50*parseInt(menuData.plateCount))
            }else if(perPlateCost >=100 && perPlateCost <=200){
                return (45*parseInt(menuData.plateCount))
            }else if(perPlateCost >=201 && perPlateCost <=300){
                return (40*parseInt(menuData.plateCount))
            }else if(perPlateCost >=301 && perPlateCost <=400){
                return (35*parseInt(menuData.plateCount))
            }else if(perPlateCost >=401 && perPlateCost <=500){
                return (30*parseInt(menuData.plateCount))
            }else if(perPlateCost >=501 && perPlateCost <=750){
                return (20*parseInt(menuData.plateCount))
            }else{
                return 10*parseInt(menuData.plateCount);
            }
        }else if(parseInt(menuData.plateCount) >= 100 && parseInt(menuData.plateCount) <=150){
            if(perPlateCost < 100){
                return (45*parseInt(menuData.plateCount))
            }else if(perPlateCost >=100 && perPlateCost <=200){
                return (40*parseInt(menuData.plateCount))
            }else if(perPlateCost >=201 && perPlateCost <=300){
                return (35*parseInt(menuData.plateCount))
            }else if(perPlateCost >=301 && perPlateCost <=400){
                return (30*parseInt(menuData.plateCount))
            }else if(perPlateCost >=401 && perPlateCost <=500){
                return (25*parseInt(menuData.plateCount))
            }else if(perPlateCost >=501 && perPlateCost <=750){
                return (15*parseInt(menuData.plateCount))
            }else{
                return 10*parseInt(menuData.plateCount);
            }
        }else if(parseInt(menuData.plateCount) >= 151 && parseInt(menuData.plateCount) <=200){
            if(perPlateCost < 100){
                return (40*parseInt(menuData.plateCount))
            }else if(perPlateCost >=100 && perPlateCost <=200){
                return (35*parseInt(menuData.plateCount))
            }else if(perPlateCost >=201 && perPlateCost <=300){
                return (30*parseInt(menuData.plateCount))
            }else if(perPlateCost >=301 && perPlateCost <=400){
                return (25*parseInt(menuData.plateCount))
            }else if(perPlateCost >=401 && perPlateCost <=500){
                return (20*parseInt(menuData.plateCount))
            }else if(perPlateCost >=501 && perPlateCost <=750){
                return (15*parseInt(menuData.plateCount))
            }else{
                return 10*parseInt(menuData.plateCount);
            }
        }else if(parseInt(menuData.plateCount) >= 201 && parseInt(menuData.plateCount) <=250){
            if(perPlateCost < 100){
                return (38*parseInt(menuData.plateCount))
            }else if(perPlateCost >=100 && perPlateCost <=200){
                return (32*parseInt(menuData.plateCount))
            }else if(perPlateCost >=201 && perPlateCost <=300){
                return (28*parseInt(menuData.plateCount))
            }else if(perPlateCost >=301 && perPlateCost <=400){
                return (22*parseInt(menuData.plateCount))
            }else if(perPlateCost >=401 && perPlateCost <=500){
                return (18*parseInt(menuData.plateCount))
            }else if(perPlateCost >=501 && perPlateCost <=750){
                return (14*parseInt(menuData.plateCount))
            }else{
                return 10*parseInt(menuData.plateCount);
            }
        }else if(parseInt(menuData.plateCount) >= 251 && parseInt(menuData.plateCount) <=300){
            if(perPlateCost < 100){
                return (35*parseInt(menuData.plateCount))
            }else if(perPlateCost >=100 && perPlateCost <=200){
                return (30*parseInt(menuData.plateCount))
            }else if(perPlateCost >=201 && perPlateCost <=300){
                return (25*parseInt(menuData.plateCount))
            }else if(perPlateCost >=301 && perPlateCost <=400){
                return (20*parseInt(menuData.plateCount))
            }else if(perPlateCost >=401 && perPlateCost <=500){
                return (15*parseInt(menuData.plateCount))
            }else if(perPlateCost >=501 && perPlateCost <=750){
                return (12*parseInt(menuData.plateCount))
            }else{
                return 10*parseInt(menuData.plateCount);
            }
        }else if(parseInt(menuData.plateCount) >= 301 && parseInt(menuData.plateCount) <=350){
            if(perPlateCost < 100){
                return (30*parseInt(menuData.plateCount))
            }else if(perPlateCost >=100 && perPlateCost <=200){
                return (28*parseInt(menuData.plateCount))
            }else if(perPlateCost >=201 && perPlateCost <=300){
                return (24*parseInt(menuData.plateCount))
            }else if(perPlateCost >=301 && perPlateCost <=400){
                return (20*parseInt(menuData.plateCount))
            }else if(perPlateCost >=401 && perPlateCost <=500){
                return (15*parseInt(menuData.plateCount))
            }else{
                return 10*parseInt(menuData.plateCount);
            }
        }else if(parseInt(menuData.plateCount) >= 351 && parseInt(menuData.plateCount) <=400){
            if(perPlateCost < 100){
                return (28*parseInt(menuData.plateCount))
            }else if(perPlateCost >=100 && perPlateCost <=200){
                return (25*parseInt(menuData.plateCount))
            }else if(perPlateCost >=201 && perPlateCost <=300){
                return (22*parseInt(menuData.plateCount))
            }else if(perPlateCost >=301 && perPlateCost <=400){
                return (18*parseInt(menuData.plateCount))
            }else if(perPlateCost >=401 && perPlateCost <=500){
                return (12*parseInt(menuData.plateCount))
            }else{
                return 10*parseInt(menuData.plateCount);
            }
        }else if(parseInt(menuData.plateCount) >= 351 && parseInt(menuData.plateCount) <=400){
            if(perPlateCost < 100){
                return (25*parseInt(menuData.plateCount))
            }else if(perPlateCost >=100 && perPlateCost <=200){
                return (20*parseInt(menuData.plateCount))
            }else if(perPlateCost >=201 && perPlateCost <=300){
                return (18*parseInt(menuData.plateCount))
            }else if(perPlateCost >=301 && perPlateCost <=400){
                return (12*parseInt(menuData.plateCount))
            }else{
                return (10*parseInt(menuData.plateCount))
            }
        }else if(parseInt(menuData.plateCount) <= 401 && parseInt(menuData.plateCount) <=500){
            if(perPlateCost < 100){
                return (20*parseInt(menuData.plateCount))
            }else if(perPlateCost >=100 && perPlateCost <=200){
                return (18*parseInt(menuData.plateCount))
            }else if(perPlateCost >=201 && perPlateCost <=300){
                return (15*parseInt(menuData.plateCount))
            }else{
                return (10*parseInt(menuData.plateCount))
            }
        }else if(parseInt(menuData.plateCount) <= 501 && parseInt(menuData.plateCount) >= 750){
            if(perPlateCost < 100){
                return (15*parseInt(menuData.plateCount))
            }else if(perPlateCost >=100 && perPlateCost <=200){
                return (12*parseInt(menuData.plateCount))
            }else{
                return (10*parseInt(menuData.plateCount))
            }
        }else{
            return (10*parseInt(menuData.plateCount))
        }
    }

    function clearFields(e){
        e.preventDefault();
        setMenuData({
            plateCount:'',
            vegPlateCount:'',
            servingType:['serving'],
            liveCounters:[],
            vegMenu:[],
            nonVegMenu:[],
        });
    }

    function calculateMenuCost(data){
        let sum = 0;
        for(var k=0; k<data.length; k++){
            sum = sum + data[k].rate;
        }
        console.log(sum)
        return sum;
    }

    function vegPlateCountValidation(field,val,isOptional){ 
        if(!val || val === '' || val === null || val === 'undefined'){
            if(isOptional === true){
                let err_mssg = 'valid';
                return err_mssg;
            }else{
                let err_mssg    =  "Veg Plate Count is required";
                return err_mssg;
            }
        }else if(parseInt(val) > parseInt(menuData.plateCount)){
            let err_mssg    =  'Should be <= Total Plate Count';
            return err_mssg;
        }else{
            let err_mssg = 'valid';
            return err_mssg;
        }
    }

    return(
        <div className="container" data-aos="zoom-in" data-aos-offset="50" data-aos-duration="1500">
            <div className="cost-estimate-form-wrap">
                <form className="row cost-estimate-form">
                    <div className="col-md-6 col-sm-12 new-form-field mb-3">
                        <label htmlFor="plateCount" className="form-label">Total Plate Count<span style={{color:"red"}}>*</span></label>
                        <input type="number" className="form-control" id="plateCount" name="plateCount" placeholder="Enter the approx number of People"  value={(menuData.plateCount !== '')? menuData.plateCount:''} onChange={(e)=>handleInputChange(e,'plateCount')}/>{
                        (palteCountErr.err_mssg !== 'valid')?
                        <div className="invalid-feedback">
                            {palteCountErr.err_mssg}
                        </div>
                        :
                        <div className="valid-feedback">
                            {palteCountErr.err_mssg}
                        </div>
                        }
                    </div>
                    <div className="col-md-6 col-sm-12 new-form-field mb-3">
                        <label htmlFor="vegPlateCount" className="form-label">Veg Plate Count</label>
                        <input type="number" className="form-control" id="vegPlateCount" name="vegPlateCount" maxLength={4} placeholder="Enter the approx number of People"  value={(menuData.vegPlateCount !== '')? menuData.vegPlateCount:''} onChange={(e)=>handleInputChange(e,'vegPlateCount')}/>{
                        (vegPlateCountErr.err_mssg !== 'valid')?
                        <div className="invalid-feedback">
                            {vegPlateCountErr.err_mssg}
                        </div>
                        :
                        <div className="valid-feedback">
                            {vegPlateCountErr.err_mssg}
                        </div>
                        }
                    </div>
                    <div className="col-md-12 col-sm-12 new-form-field mb-2" style={{display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
                        <label htmlFor="servingType" className="form-label">Serving Type<span style={{color:"red"}}>*</span></label>
                        <div className="meals-field-section">
                            <div className="form-check mt-1 mb-2 me-4 ml-0">
                                <input className="form-check-input" type="radio" name="servingType" value="buffet" id="flexCheckDefault" onChange={(e)=>{handleInputChange(e, 'servingType')}}/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">&nbsp; Buffet</label>
                            </div>
                            <div className="form-check mt-1 mb-2 me-4">
                                <input className="form-check-input" type="radio" name="servingType" value="serving" id="flexCheckDefault" onChange={(e)=>{handleInputChange(e, 'servingType')}} defaultChecked/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">&nbsp; Serving</label>
                            </div>
                            <div className="form-check mt-1 mb-2 me-4">
                                <input className="form-check-input" type="radio" name="servingType" value="delivery" id="flexCheckDefault" onChange={(e)=>{handleInputChange(e, 'servingType')}}/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">&nbsp; Delivery</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 new-form-field live-counters-field mb-3" name="liveCounters" style={{display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
                        <label htmlFor="liveCounters" className="form-label">Counters/Stalls</label>
                        <Select
                            isMulti
                            name="liveCounters"
                            options={Constant_Variables.live_stalls}
                            value={menuData.liveCounters}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            placeholder="Add food stalls..."
                            onChange={(e)=>handleInputChange(e,'liveCounters')}
                        />
                    </div>
                    <div className="col-md-12 col-sm-12 new-form-field live-counters-field mb-3" name="vegMenu" style={{display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
                        <label htmlFor="vegMenu" className="form-label">Menu For Veg Pax</label>
                        <Select
                            isMulti
                            name="vegMenu"
                            options={Constant_Variables.veg_menu}
                            value={menuData.vegMenu}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            placeholder="Add veg menu..."
                            onChange={(e)=>handleInputChange(e,'vegMenu')}
                        />
                    </div>
                    <div className="col-md-12 col-sm-12 new-form-field live-counters-field mb-3" name="nonVegMenu" style={{display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
                        <label htmlFor="nonVegMenu" className="form-label">Menu For Non Veg Pax</label>
                        <Select
                            isMulti
                            name="nonVegMenu"
                            options={Constant_Variables.non_veg_menu}
                            value={menuData.nonVegMenu}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            placeholder="Add non-veg menu..."
                            onChange={(e)=>handleInputChange(e,'nonVegMenu')}
                        />
                    </div>
                    <div className="col-6 col-xs-6 col-sm-6 col-md-6 mt-4 mb-1" style={{textAlign:"right", paddingRight:"6px"}}>
                        <button className="btn btn-secondary" onClick={clearFields} style={{minWidth:"124px"}}>Clear</button>
                    </div>
                    <div className="col-6 col-xs-6 col-sm-6 col-md-6 mt-4 mb-1" style={{textAlign:"left", paddingLeft:"6px"}}>
                        <button className="btn btn-primary" onClick={calculateTotalCost} style={{minWidth:"124px"}}>Calculate</button>
                    </div>

                    <div className="col-sm-12 pt-4" style={{textAlign:"left", paddingLeft:"6px"}}>
                        <p className="mb-0 ps-2 pe-2" style={{lineHeight:"1.2", color:"#7e2400", fontFamily:"Proxima Soft Bold", fontSize:"12px", textAlign:"center"}}>The above Cost estimation result is not exact. Cost may varry on depend on current rate and location. For more idea, Please call us at our customer care.</p>
                    </div>
                </form>
            </div> 
        </div>
    )
}