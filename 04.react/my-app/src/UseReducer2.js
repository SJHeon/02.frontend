import React, { useCallback, useEffect, useReducer, useState } from "react";

const reducer = (state, action) => {
    return console.log(action);
}

const initialList = {
    count: 1, 
    lists : [
        {
            id: 1,
            name: 'ramen',
            confirmed: true
        }
    ]
}

function UseReducer2() {
    const [list, setList] = useState("");
    const [finalList, dispatch] = useReducer(reducer, initialList); 
    
    // console.log(initialList.lists[0].name);
    console.log(finalList);
    console.log(typeof finalList);
    
    return(
        <div>
            <h2>물품 리스트</h2>
            <p>총 물품수 : ? 개</p>
            <input 
                type="text"
                placeholder="물품을 입력하세요"
                onChange={(e) => setList(e.target.value)}>
            </input>
            <button onClick={() => {
                dispatch({flist : finalList, name : list})
            }}>추가</button>
        </div>
    )
}

export default UseReducer2;