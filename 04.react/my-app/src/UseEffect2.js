import React, { useState, useEffect } from "react";

// ver1
function UseEffect2(props) {

    useEffect(() => {
        const work = setInterval(() => {
            console.log("---work---")
        }, 1000);

        return () => {
            clearInterval(work);
        }
    });

    return(
        <div>
        <span>작업중 - 콘솔보기</span>
        {/* <span>{props.imp ? "작업중 - 콘솔보기" : ""}</span> */}
    </div>
    );
};

// ver2
// function UseEffect2(previousState) {
//     const [input, setInput] = useState("")
//     console.log(previousState.state);
//     useEffect(() => {
//         if (previousState.state) {
//             setInput("작업중 - 콘솔보기")
//             const work = setInterval(() => {
//                 console.log('--work--')
//             }, 1000);
//         }
//     })


//     return (
//         <div>
//             <p>{input}</p>
//         </div>
//     )
// }

export default UseEffect2;