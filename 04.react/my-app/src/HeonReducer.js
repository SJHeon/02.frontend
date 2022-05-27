import React, { useReducer, useRef, useState } from "react";
import List from "./List";

const initialList = {
  count: 1,
  lists: [
    {
      id: 1,
      name: "Heon",
      confirmed: true,
    },
  ],
};

const reducer = (state, action) => {
  console.log("reducer 동작 확인");
  console.log(state, action);
  switch (action.type) {
    case "add-list":
      const name = action.name.list;
      const newList = {
        id: (action.id.currentId.current += 1),
        name,
        confirmed: true,
      };

      return {
        count: state.count + 1,
        lists: [...state.lists, newList],
      };

    case "delete-list":
      console.log(state.lists);
      console.log(action.id.id);
      return {
        count: state.count - 1,
        lists: state.lists.filter((list) => list.id !== action.id.id),
      };

    case "confirmed-list":
      console.log(state.lists[action.id.id - 1]);
      //   console.log(state.lists[action.id.id - 1].confirmed);
      //   console.log(!state.lists[action.id.id - 1].confirmed);
      //   console.log(action);
      //   console.log(action.id);
      //   console.log(state);
      console.log(state.lists);
      console.log(action.id.id);
      return {
        count: state.count,
        lists: state.lists.map((list) => {
          if (list.id === action.id.id) {
            return { ...list, confirmed: !list.confirmed };
          }
          return list;
        }),
      };

    default:
      return state;
  }
};

function HeonReducer() {
  const [list, setList] = useState("");
  const currentId = useRef(1);
  const [finalList, dispatch] = useReducer(reducer, initialList);
  return (
    <div>
      <h1>회원 이름</h1>
      <p>총 회원 수 : {finalList.count}</p>
      <input
        type="text"
        placeholder="회원명을 입력"
        onChange={(e) => {
          setList(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          dispatch({ type: "add-list", id: { currentId }, name: { list } });
        }}
      >
        추가
      </button>
      {finalList.lists.map((list) => {
        return (
          <List
            key={list.id}
            name={list.name}
            con={list.confirmed}
            dispatch={dispatch}
            id={list.id}
          />
        );
      })}
    </div>
  );
}

export default HeonReducer;
