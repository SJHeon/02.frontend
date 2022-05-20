import React, { useState } from "react";


function UseState1(){
    const [time,setTime] = useState(1);
    console.log("---렌더링---");
    console.log("---외부---", time);
    const updateTime = () => {
    // let i;

    //     if (time >= 24){
    //         i =1;
    //     }else{
    //         i = time +1;
    //     }
    //     setTime(i);

        // setTime(time + 1);
        // console.log(setTime);
        // // if(time === 24)
        // if(time > 23)
        // {
        //     setTime(1);
        // }
        console.log("---내부---", time);
        // 1. state 변수에는 직접 값을 할당 불가능
        // time = time + 1;
        
        setTime(time + 1);
        console.log("---내부---", time);
    };
    return(
    <div>
        <span>Now : {time}</span>
        <button onClick={updateTime}>Click!</button>
    </div>
    )
}



export default UseState1;