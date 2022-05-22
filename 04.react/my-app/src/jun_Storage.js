import React, { useState } from "react";
function Pass() {
    const [id, setId] = useState("");
    const [pass, setPass] = useState("");
    const [check, setCheck] = useState(false);

    const idChange = (e) => {
        setId(e.target.value);
        setCheck(false);
    };
    
    const passChange = (e) => {
        setPass(e.target.value);
        setCheck(false);
    };

    const checkId = () => {
        const user = {
            id: id,
            pass: pass
        };
        console.log(user);
        let idSize = window.localStorage.length;
        console.log(id);
        console.log(pass);
        console.log(window.localStorage.key(0))
        for (var i = 0; i < idSize; i++) {
            if (id == window.localStorage.key(i)) {
                console.log("id 일치");
                if (pass == window.localStorage.getItem(id)) {
                    console.log("password 일치");
                    setCheck(true);
                } else {
                    console.log("password 불일치");
                }
                break;
            }
        };

        if (idSize === i) {
            console.log('id 불일치');
        };
    };

    // const checkPass = () => {
    //     const user = { id: id };
    //     let idSize = window.localStorage.length;
    //     console.log(id);
    //     console.log(window.localStorage.key(0))
    //     for (var i = 0; i < idSize; i++) {
    //         if (id == window.localStorage.key(i)) {
    //             console.log("id 일치");
    //             break;
    //         };
    //     };

    //     if (idSize === i)
    //     {
    //         console.log('id 불일치');
    //     };
    // };


    return (
        <div>
            <div style={{ textalign: "center" }}>
                ID:
                <input
                    id="key"
                    placeholder="Id를 입력 하시오"
                    onChange={idChange} />
                <br />
                Passwd:

                <input
                    passwd="value"
                    placeholder="Passwd를 입력 하시오"
                    type='password'
                    onChange={passChange} />
                <button
                    onClick={checkId}
                >로그인</button>
                {check ? <p>{id}로그인</p> : <></>}
            </div>
        </div>
    );
}

export default Pass;