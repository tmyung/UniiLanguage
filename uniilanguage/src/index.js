import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./components/Home.js";
import H2p from "./components/h2p"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="h2p" element={<H2p />} />
        </Routes>
    </BrowserRouter>
);