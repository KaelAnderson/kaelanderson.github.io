import React, {useEffect, useState} from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Route,
    Routes
  } from "react-router-dom";

import Home from "./pages/Home";
import GreenPath from "./pages/GreenPath";
import StudyAngel from "./pages/StudyAngel";
import JuliaCompiler from "./pages/JuliaCompiler";
import KSUResearch from "./pages/KSUResearch";
function App() {
    
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/GreenPath" element={<GreenPath/>}/>
                    <Route path="/StudyAngel" element={<StudyAngel/>}/>
                    <Route path="/JuliaCompiler" element={<JuliaCompiler/>}/>
                    <Route path="/KSUResearch" element={<KSUResearch/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
