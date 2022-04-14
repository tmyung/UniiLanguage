import React from "react";
import { useNavigate } from "react-router-dom";

import '../index.css';

const End = () => {

    let nav = useNavigate();
    function navigate() {
        nav('/');
    }

    return(
        <>
            <h1> Good Job! </h1>
            <h2> Wan to play again? </h2>
            <button onClick={navigate}>Play again</button>
            <button> Save drawings </button>
        </>
    );
}

export default End;