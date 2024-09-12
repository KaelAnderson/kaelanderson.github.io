import React, {useEffect, useState} from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    
    Route,
    Routes
  } from "react-router-dom";

import Home from "./pages/Home";
import GreenPath from "./pages/GreenPath";
import StudyAngel from "./pages/StudyAngel";
import JuliaCompiler from "./pages/JuliaCompiler";
import KSUResearch from "./pages/KSUResearch";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";


function App() {
    
    return (
        <div>
            
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/GreenPath" element={<GreenPath />} />
                <Route path="/StudyAngel" element={<StudyAngel />} />
                <Route path="/JuliaCompiler" element={<JuliaCompiler />} />
                <Route path="/KSUResearch" element={<KSUResearch />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
            

        </div>
    );
}

export default App;
