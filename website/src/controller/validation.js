var custom_functions = {
    nameValidation : function(ele,val,isOptional){
        let reg_exp  = /^[a-zA-Z][a-zA-Z\-\ \.]{2,}$/i;

        if(!val || val === '' || val === null || val === 'undefined'){
            if(isOptional === true){
                let err_mssg = 'valid';
                return err_mssg;
            }else{
                let err_mssg    =   ele+" is required";
                return err_mssg;
            }
        }else if(val.length <= 2){
            let err_mssg = ele+" should be minimum 3 characters.";
            return err_mssg;
        }else if(!reg_exp.test(val)){
            let err_mssg = 'Accepts Alphabels Only';
            return err_mssg;
        }else{
            let err_mssg = 'valid';
            return err_mssg;
        }
    },

    emailValidation : function(ele,val,isOptional){
        var reg_exp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,13}))$/;
        if(!val || val === '' || val === null || val === 'undefined'){
            if(isOptional === true){
                let err_mssg = 'valid';
                return err_mssg;
            }else{
                let err_mssg    =   ele+" is required";
                return err_mssg;
            }
        }else if(!reg_exp.test(val)){
            let err_mssg    =   ele+" is not valid";
            return err_mssg;
        }else{
            let err_mssg = 'valid';
            return err_mssg;
        }
    },

    phoneValidation : function(ele,val,isOptional){
        let reg_exp  = /^\d{10}$/;

        if(!val || val === '' || val === null || val === 'undefined'){
            if(isOptional === true){
                let err_mssg = 'valid';
                return err_mssg;
            }else{
                let err_mssg    =   ele+" is required";
                return err_mssg;
            }
        }else if(!reg_exp.test(val)){
            let err_mssg = ele+' should be 10 digits.';
            return err_mssg;
        }else{
            let err_mssg = 'valid';
            return err_mssg;
        }
    },
    
    dobValidation: function (ele,val,isOptional){
        let currentDate =  new Date();
        let currentYear =  currentDate.getFullYear();
        let birthDate   =  new Date(val);
        let birthYear   =  birthDate.getFullYear();

        if(!val || val === '' || val === null || val === 'undefined'){
            if(isOptional === true){
                let err_mssg = 'valid';
                return err_mssg;
            }else{
                let err_mssg    =   ele+" is required";
                return err_mssg;
            }
        }else if(birthYear > currentYear) {
            let err_mssg    =   "Future date is not allowed";
            return err_mssg;
        }else{
            let err_mssg = 'valid';
            return err_mssg;
        }
    },

    // This function helps to validate input date field data with start and maximum end this two parameter and also checks required validation
    // params - start and end should be in miliseconds format
    // start  - start after current date  
    // end    - end after current date
    // val    - 2025-01-01 [input date val by user]
    futureDateValidation: function (ele,val,start,end,isOptional){
        var todays_Date  = new Date();    // Get today's date.
        let hour         = addZero(todays_Date.getHours());
        let minute       = addZero(todays_Date.getMinutes());
        let second       = addZero(todays_Date.getSeconds());
        var todays_time  = todays_Date.getTime(); //convert today in milisecond

        let current_time = hour + ":" + minute + ":" + second;  //get current time
        // let input_time   = Date.parse(val);  //convert input date and time to milisecond
        // let input_date   = new Date(input_time);  //convert milisecond to date object

        let input_date = new Date(val+" "+current_time);
        let input_time = input_date.getTime()+60000;  //convert date to milisecond

        var m            = 12     // 1y   = 12m
        var d            = 30     // 1m   = 30d
        var h            = 24     // 1day = 24h
        var min          = 60     // 1h   =  60min
        var sec          = 60     // 1min = 60sec
        var ms           = 1000   // 1sec = 1000 mili-second
        let max_time_span=0, min_time_span=0;
        if((start !== '' || start !== undefined || start !== null) && (end !== '' || end !== undefined || end !== null)){   // if start and end is not given then max_time_span will be 2 years and minimum start date will be 1 day
            max_time_span   = end;
            min_time_span   = start;
        }else{
            max_time_span   = ms*sec*min*h*d*m*2;   // 2years  1000*60*60*24*30*12*2
            min_time_span   = ms*sec*min*h*1;      //  1day  1000*60*60*24*1
        }
    
        var max_future_date = todays_time+max_time_span;    // maximum end date
        var min_start_date  = todays_time+min_time_span;    // minimum start date

        //convert milisecond to date object
        var max_date = new Date(max_future_date);
        var min_date = new Date(min_start_date);

        //Get Formated date
        var max_date_format = custom_functions.getFormatedDate(max_date,'/');  //format will be dd/mm/yyyy
        var min_date_format = custom_functions.getFormatedDate(min_date,'/');  //format will be dd/mm/yyyy


        if(!val || val === '' || val === null || val === 'undefined'){
            if(isOptional === true){
                let err_mssg = 'valid';
                return err_mssg;
            }else{
                let err_mssg    =   ele+" is required";
                return err_mssg;
            }
        }else if(input_time < min_start_date) {
            let err_mssg    =   "Date must be "+min_date_format+" or later";
            return err_mssg;
        }else if(input_time > max_future_date) {
            let err_mssg    =   "Date must be from "+min_date_format+" to "+max_date_format;
            return err_mssg;
        }else{
            let err_mssg = 'valid';
            return err_mssg;
        }

        function addZero(i) {
            if (i < 10) {i = "0" + i}
            return i;
          }
    },

    getFormatedDate: function(date,symbol){
        var year        = date.getFullYear();            // yyyy
        var month       = ("0" + (date.getMonth() + 1)).slice(-2); // mm
        var day         = ("0" + date.getDate()).slice(-2);   // dd
        var finalDate   = (day + symbol + month + symbol + year);
        return finalDate
    },

    requiredValidation: function(ele,val,isOptional){
        if(!val || val === '' || val === null || val === 'undefined'){
            if(isOptional === true){
                let err_mssg = 'valid';
                return err_mssg;
            }else{
                let err_mssg    =   ele+" is required";
                return err_mssg;
            }
        }else{
            let err_mssg = 'valid';
            return err_mssg;
        }
    },

    cityValidation : function(ele,val,isOptional){
        let reg_exp  = /^[a-zA-Z][a-zA-Z\-\ \.]{0,}$/i;

        if(!val || val === '' || val === null || val === 'undefined'){
            if(isOptional === true){
                let err_mssg = 'valid';
                return err_mssg;
            }else{
                let err_mssg    =   ele+" is required";
                return err_mssg;
            }
        }else if(!reg_exp.test(val)){
            let err_mssg = 'Accepts Alphabels Only';
            return err_mssg;
        }else{
            let err_mssg = 'valid';
            return err_mssg;
        }
    },

    pinCodeValidation: function (ele,val,isOptional){
        let reg_exp  = /^\d{0,}$/;
        let ind_pin_exp  = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;

        if(!val || val === '' || val === null || val === 'undefined'){
            if(isOptional === true){
                let err_mssg = 'valid';
                return err_mssg;
            }else{
                let err_mssg    =   "Pin code is required";
                return err_mssg;
            }
        }else if(!reg_exp.test(val)){
            let err_mssg = 'Pin code should be digits.';
            return err_mssg;
        }else if(!ind_pin_exp.test(val)){
            let err_mssg = 'Invalid Indian Pincode.';
            return err_mssg;
        }else{
            let err_mssg = 'valid';
            return err_mssg;
        }
    },

    verifyMobOtp : function (val){
        if(!val || val === '' || val === null || val === 'undefined'){
            let err_mssg = 'Incorrect Otp';
            return err_mssg;
        }else{
            let err_mssg = 'valid';
            return err_mssg;
        }
    },

    sendMobOtp : function (val){
        if(!val || val === '' || val === null || val === 'undefined'){
            let err_mssg = 'OTP is required';
            return err_mssg;
        }else{
            
        }
    },

    numberValidation: function(ele, val, isOptional){
        let reg_exp  = /^\d+$/;

        if(!val || val === '' || val === null || val === 'undefined'){
            if(isOptional === true){
                let err_mssg = 'valid';
                return err_mssg;
            }else{
                let err_mssg    =   ele+" is required";
                return err_mssg;
            }
        }else if(!reg_exp.test(val)){
            let err_mssg = ele+' Accepts numbers only.';
            return err_mssg;
        }else{
            let err_mssg = 'valid';
            return err_mssg;
        }
    }
}

export default custom_functions;