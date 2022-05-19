import React, { useContext } from "react";
import { UseContext1 } from "./UseContext1";

const Header = () => {
    // const data = useContext(UseContext1);
    // console.log(data);
    //
    // 머저리
    // const { company, setCompany } = useContext(UseContext1);
    // const { bgcolor, setBgcolor } = useContext(UseContext1);
    // const { ftcolor, setFtcolor } = useContext(UseContext1);
    
    // console.log(bgcolor, ftcolor);
    // const WtoD = () => {
    //     setFtcolor("white");
    //     setBgcolor("black");
    // }

    // const DtoW = () => {
    //     setFtcolor("black");
    //     setBgcolor("white");
    // }


    // 괴짜
    const { company, setCompany, darkMode, setDarkMode } = useContext(UseContext1);
    const changeMode = () => {
        setDarkMode(!darkMode);
    }
    
    // const ktoE = () => {
    //     setCompany("DouZone");
    // };
    // const EtoK = () => {
    //     setCompany("더존");
    // };

    const changeLanguage = () => {
        setCompany(!company);
    };

    const htmlValue = document.querySelector("html");
    console.log(htmlValue);
    console.log(typeof htmlValue);
    const {color} = useContext(UseContext1);
    htmlValue.style.backgroundColor = (color === "black"?"white":"black");
    


    return (
        // <header
        //     className="header"
        //     style={{
        //         color: ftcolor,
        //         backgroundColor: bgcolor
        //     }}>
        //     <button onClick={WtoD}>DarkMode</button>
        //     <button onClick={DtoW}>LightMode</button>
        //     <h1> {company} New Devs</h1>
        //     <button onClick={ktoE}>English</button>
        //     <button onClick={EtoK}>Korean</button>
        // </header>

        <header
            className="header"
            style={{
                color: darkMode? "black" : "white",
                backgroundColor: darkMode? "white" : "black"
            }}>
            {/* <button onClick={changeStatus}>DarkMode</button> */}
            <button onClick={changeMode}>DarkMode</button>
            <h1> {company? "더존" : "Douzone"} New Devs</h1>
            {/* <button onClick={ktoE}>English</button> */}
            {/* <button onClick={EtoK}>Korean</button> */}
            <button onClick={changeLanguage}>ChangeLanguage</button>
        </header>
    );
}

export default Header; 