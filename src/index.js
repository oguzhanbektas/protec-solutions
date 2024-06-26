import React from "react";
import ReactDOM from "react-dom/client";
import {Route, Routes, Navigate, HashRouter} from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import About from "./views/examples/Ubout";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Navbar from "components/Navbars/Navbar.js";
import CardsFooter from "./components/Footers/CardsFooter";
import Whistle from "./views/services/Whistle";
import Fraud from "./views/services/Fraud";
import SmartApp from "./views/services/SmartApp";
import ArtificialIntelligence from "./views/services/ArtificialIntelligence";
import Sumsub from "./views/products/Sumsub";
import Aci from "./views/products/Aci";
import Regula from "./views/products/Regula";
import Kyc from "./views/products/sumsub/Kyc";
import Kyt from "./views/products/sumsub/Kyt";
import Kyb from "./views/products/sumsub/Kyb";
import Communication from "./views/examples/Communication";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HashRouter>
    <Navbar/>
    <Routes>
        <Route path="/" exact element={<Index/>}/>
        <Route path="/landing-page" exact element={<Landing/>}/>
        <Route path="/about-us-page" exact element={<About/>}/>
        <Route path="/artificial-intelligence-page" exact element={<ArtificialIntelligence/>}/>
        <Route path="/smart-app-page" exact element={<SmartApp/>}/>
        <Route path="/fraud-page" exact element={<Fraud/>}/>
        <Route path="/whistle-page" exact element={<Whistle/>}/>
        <Route path="/regula-page" exact element={<Regula/>}/>
        <Route path="/aci-page" exact element={<Aci/>}/>
        <Route path="/sumsub-page" exact element={<Sumsub/>}/>
        <Route path="/kyc-page" exact element={<Kyc/>}/>
        <Route path="/kyt-page" exact element={<Kyt/>}/>
        <Route path="/kyb-page" exact element={<Kyb/>}/>
        <Route path="/login-page" exact element={<Login/>}/>
        <Route path="/profile-page" exact element={<Profile/>}/>
        <Route path="/register-page" exact element={<Register/>}/>
        <Route path="/communication-page" exact element={<Communication/>}/>
        <Route path="*" element={<Navigate to="/" replace/>}/>
    </Routes>
    <CardsFooter/>
</HashRouter>);
