import React from "react";
import { useNavigate } from "react-router-dom";

import '../index.css';

const H2p = () => {

    let nav = useNavigate();
    function navigate() {
        nav('/h2p2');
    }

    return(
        <>
            <div>
                <h1>
                    How to Play
                </h1>
                <p>
                    You will see a silly sentence in the next slide. <br></br>
                    Then you will draw that sentence <br></br>
                    3 times
                </p>
                <button onClick={navigate}>Next</button>
            </div>
        </>
    );
}

export default H2p;