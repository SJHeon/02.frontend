import React, { useCallback, useEffect, useReducer, useState } from "react";

const reducer = (state, action) => {
   //
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
    
    return(
        <div>
            <h2>물품 리스트</h2>
            <p>총 물품수 : ? 개</p>
            <input 
                type="text"
                placeholder="물품을 입력하세요"
                onChange={(e) => setList(e.target.value)}>
            </input>
            <button>추가</button>
        </div>
    )
}

export default UseReducer2;