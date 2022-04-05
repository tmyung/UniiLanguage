import React from "react";
import { useNavigate } from "react-router-dom";

import './Home.css';

const Home = () => {
    return (
        <>
            <h1 class="logo">
                <span style={{color: "red"}}>U</span>
                <span style={{color: "yellow"}}>n</span>
                <span style={{color: "green"}}>i</span>
                <span style={{color: "skyblue"}}>i</span>
                <span style={{color: "black"}}>language</span>
            </h1>

            <div>
                <button class="get_started">
                    Get Started!
                </button>
            </div>
        </>
    );
}

export default Home;