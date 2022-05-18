import React, { useContext } from "react";
import { UseContext1 } from "./UseContext1";


const Articles = () => {
    // const { company, setCompnay } = useContext(UseContext1);
    // const { bgcolor, setBgcolor } = useContext(UseContext1);
    // const { ftcolor, setFtcolor } = useContext(UseContext1);
    // const { company, bgcolor, ftcolor } = useContext(UseContext1);
    const { company, setCompany, darkMode, setDarkMode } = useContext(UseContext1);
    console.log(company);

 
    // return (
    //     <article
    //         className="article"
    //         style={{
    //             color: ftcolor,
    //             backgroundColor : bgcolor
    //         }}>
    //         <h3>{company}에 오신것을 환영합니다</h3>
    //     </article>
    // );

    return (
        <article
            className="article"
            style={{
                color: darkMode? "black" : "white",
                backgroundColor: darkMode? "white" : "black"
            }}>
            <h3>{company}에 오신것을 환영합니다</h3>
        </article>
    );
}

export default Articles; 