import React, { useContext } from "react";
import Header from "./Header";
import Articles from "./Articles";
import { UseContext1 } from "./UseContext1";

const News = () => {


    return (
        <div className="news">
            {/* <Header company={company} setCompany={setCompany}></Header> */}
            <Header></Header>
            {/* <Articles company={company}></Articles> */}
            <Articles></Articles>
            {/* <Footer company={company}></Footer> */}

        </div>
    );
}

export default News; 