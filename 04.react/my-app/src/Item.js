import React, { Component, useEffect, useState } from "react";


// update가 일어나는 경우
// - state가 바뀔 때
// - props가 바뀔 때
// - 부모 Component가 다시 렌더링 될 때
// - 강제적인 렌더링이 진행 될 때

function Item({createItemStyle}) {
    const[styleValue, setStyleValue] = useState({});

    useEffect(() => {
        console.log("Item Update");
        setStyleValue(createItemStyle)
    },[createItemStyle])

    return (
        <div style={styleValue}></div>
    )
}

export default Item;