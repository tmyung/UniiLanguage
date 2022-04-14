import React from "react";
import { useNavigate } from "react-router-dom";

import '../index.css';

const H2p2 = () => {

    let nav = useNavigate();
    function navigate() {
        nav('/end');
    }

    return(
        <>
            <div>
                <h1>
                    How to Play
                </h1>
                <p>
                    You will have 10 seconds, 30 seconds, and 1 <br></br>
                    minutes to draw a picture of the words in the <br></br>
                    silly sentence.
                </p>
                <button onClick={navigate}>Let's Draw</button>
            </div>
        </>
    );
}

export default H2p2;