import React, { useState } from "react";


function UseState1(){
    const [time,setTime] = useState(1);

    const updateTime = () => {
    let i;

        if (time >= 24){
            i =1;
        }else{
            i = time +1;
        }
        setTime(i);

        // setTime(time + 1);
        // console.log(setTime);
        // // if(time === 24)
        // if(time > 23)
        // {
        //     setTime(1);
        // }
    };
    return(
    <div>
        <span>Now : {time}</span>
        <button onClick={updateTime}>Click!</button>
    </div>
    )
}



export default UseState1;