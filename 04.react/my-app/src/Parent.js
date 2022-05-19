import React, { useState } from "react";
import Child from "./Child";

function Parent() {
    //#region ver1
    // const [num, setNum] = useState(0);

    // const getNum = (num) => {
    //     setNum(num);
    // };

    // return(
    //     <div>
    //         <p>여기는 부모 입니다 : {num}</p>
    //         <Child num={num} getNum={getNum}></Child>
    //     </div>
    // );
    //#endregion

    const [data, setData] = useState("parent data");

    return(
        <>
        <div>{data}</div>
        <Child setData={setData}></Child>
        </>
    );
};
export default Parent;