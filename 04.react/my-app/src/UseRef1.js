import React, { useRef, useState } from "react";
// 컴포넌트는 함수형이라 표현형으로 가능
function UseRef1(){
    // useState : 렌더링이 계속 일어난다 -> 메모리 부담 증가
    const [stateNumber, setStateNumber] = useState(0);

    const updateStateNumber = () => {
        setStateNumber(stateNumber + 1);
        console.log(stateNumber);
    };
    // console.log("---렌더링---")

    // useRef : 내부적으로는 실행 되지만 렌더링은 일어나지 않는다
    const refNumber = useRef(0);
    // console.log(refNumber);
    // console.log(refNumber.current);

    const updateRefNumber = () => {
        refNumber.current = refNumber.current + 1;
        console.log(refNumber.current);
    };

    return(
        <div>
            <div>
                <p>StateNumber : {stateNumber}</p>
                <button onClick={updateStateNumber}>stateNumber+1</button>
            </div>
            <hr/>
            <div>
                <p>refNumber : {refNumber.current}</p>
                <button onClick={updateRefNumber}>refNumber+1</button>
            </div>
        </div>
    );
};

export default UseRef1;