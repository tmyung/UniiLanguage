import React from "react";
import { useNavigate } from "react-router-dom";

import '../index.css';

const Home = () => {

    let nav = useNavigate();
    function navigate() {
        nav('/h2p');
    }

    return (
        <>
            <h1 className="logo">
                <span style={{color: "red"}}>U</span>
                <span style={{color: "yellow"}}>n</span>
                <span style={{color: "green"}}>i</span>
                <span style={{color: "skyblue"}}>i</span>
                <span style={{color: "black"}}>language</span>
            </h1>

            <div>
                <button className="get_started" onClick={navigate}>
                    Get Started!
                </button>
            </div>
        </>
    );
}

export default Home;