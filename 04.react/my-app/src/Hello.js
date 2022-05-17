import React from "react"
//#region
// const {name, color} ={props}

// function Hello({ name, color, important }) {
//     // function Hello(props) {
//     // console.log(props);
//     // console.log(props.name);
//     // console.log(props.color);
//     console.log(important);

//     // const name = "React";
//     // return<div style={props}>Hello, {props.name}</div>
//     // return<div style={{color: props.color}}>Hello, {props.name}</div>
//     // props.color => nono

//     // 변수로는?
//     // return <div style={{ color: color }}>Hello, {name}</div>
//     return (
//         <div style={{
//             color
//         }}>
            
//             Hello, {name}
//         </div>
//     )
// }
//#endregion
function Hello({ name, color, important }) {
    console.log({important});
    return (
        <div style={{
            color
        }}>
            {/* {important ? '!!' : null} */}
            {important && '!!'}
            Hello, {name}
        </div>
    )
}

Hello.defaultProps = {
    name: "name prop 기본값"
}

export default Hello;