"use strict";

const createClock = (hourSpan, minuteSpan, secondSpan, ampmSpan) => {
    // private state
    const displayCurrentTime = () => {
        const now = new Date();
        let ampm = "AM"; // setting up default value    
        let hours = now.getHours();  
        // to output correct hours and AM/PM values 
        if (hours > 12) { 
            hours = hours - 12;
            ampm = "PM";
        } else {  
             switch (hours) { //12 PM hours
                case 12:
                    ampm = "PM";
                    break;
                case 0:      //  12 AM hours
                    hours = 12;
                    ampm = "AM";
            }}
        $("#hours").text(hours);
        $("#minutes").text( padSingleDigit(now.getMinutes()) );
        $("#seconds").text( padSingleDigit(now.getSeconds()) );
        $("#ampm").text(ampm);
    }; // public methods
    return {    
    }
};