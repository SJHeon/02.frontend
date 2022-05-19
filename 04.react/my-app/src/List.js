import React from "react";

const List = ( {name} ) => {
    return(
        <div>
            <span>{name}</span>
            <button>삭제</button>
        </div>
    )
}

export default List;
