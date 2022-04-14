import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./components/Home";
import H2p from "./components/h2p";
import H2p2 from "./components/h2p2";
import Draw_10 from "./components/Drawing_10_sec";
import Draw_30 from "./components/Drawing_30_sec";
import Draw_60 from "./components/Drawing_60_sec";
import End from "./components/End_screen";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="h2p" element={<H2p />} />
            <Route path="h2p2" element={<H2p2 />} />
            <Route path="10" element={<Draw_10/>}/>
            <Route path="30" element={<Draw_30/>}/>
            <Route path="60" element={<Draw_60/>}/>
            <Route path="end" element={<End />}/>

        </Routes>
    </BrowserRouter>
);