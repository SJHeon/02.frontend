import React from "react";

const List = ( {id, name, con, dispatch} ) => {

    return(
        <div>
            <span style={{
                color: con? "black" : "red",
                textDecoration: con? "none" : "line-through"
            }}
            onClick={() => dispatch({type: "confirmed-list", id: {id}, con: {con}})}>{name}</span>
            <button onClick={() => dispatch({type: "delete-list",id: {id}
            })}>삭제</button>
        </div>
    )
}

export default List;
