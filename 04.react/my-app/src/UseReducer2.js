import React, { useCallback, useEffect, useReducer, useRef, useState } from "react";
import List from "./List";

const reducer = (state, action) => {
    console.log("reducer 동작 확인")
    console.log(state, action);
    // console.log(action.id.currentId);
    switch (action.type) {
        case "add-list":
            // console.log(state);
            const name = action.name.list;
            const newList = {
                id: action.id.currentId.current += 1,
                // name: name, //프로퍼티 밸류 같고 상태 같으면 굳이?
                name, // 하나만 써도된당
                confirmed: true
            };

            return {
                count: state.count + 1,
                lists: [...state.lists, newList]
            };

        case "delete-list":
            console.log(state.lists);
            return {
                count: state.count - 1,
                lists: state.lists.filter(
                    (list) => (list.id !== action.id.id)
                )
            };

        case "confirmed-list":
            // console.log(state);
            // console.log(state.lists);
            // console.log(state.lists[0]);
            // console.log(action);
            // console.log(action.id.id);
            // console.log(state.lists[action.id.id -1 ]. confirmed);
            // console.log(action.con); // true 잘 가져옴
            // state.lists[action.id.id - 1].confirmed = !(state.lists[action.id.id -1].confirmed);
            console.log(state.lists[action.id.id - 1].confirmed);
            console.log(!(state.lists[action.id.id - 1].confirmed));
            return {
                count: state.count,
                lists: state.lists.map(
                    (list) => {
                        if(list.id === action.id.id){
                            return {...list, confirmed: !list.confirmed}
                        }
                        return list
                    }
                )
            };

        default:
            return state;
    }
}

const initialList = {
    count: 1,
    lists: [
        {
            id: 1,
            name: 'ramen',
            confirmed: true
        }
    ]
}

function UseReducer2() {
    const [list, setList] = useState("");
    const currentId = useRef(1);
    const [finalList, dispatch] = useReducer(reducer, initialList);
    // console.log(finalList);
    // console.log("리스트는 : ", list);
    // console.log("currentID : ", currentId);
    return (
        <div>
            <h2>물품 리스트</h2>
            <p>총 물품수 : {finalList.count} 개</p>
            <input
                type="text"
                placeholder="물품을 입력하세요"
                onChange={(e) => setList(e.target.value)}>
            </input>

            <button onClick={() => {
                dispatch({ type: "add-list", id: { currentId }, name: { list } });
            }}>추가</button>

            {finalList.lists.map((list) => {
                // console.log(list.name);
                // console.log(list.id);
                // return <p key={list.id}>{list.name}<button>삭제</button></p>;
                return <List
                    key={list.id}
                    name={list.name}
                    con={list.confirmed}
                    dispatch={dispatch}
                    id={list.id}
                />
            })}
        </div>
    )
}

export default UseReducer2;