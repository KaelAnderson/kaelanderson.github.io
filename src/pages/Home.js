import React, {useEffect, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import "../App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/NavBar";






    
function Home(){
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }

        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);
 
    return(
        <NavBar/>
        
    );

}   

export default Home;