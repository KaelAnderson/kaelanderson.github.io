import React, {useEffect, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import "../App.css";
import particlesOptions from "../particles.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Col, Row, Container } from "react-bootstrap";
import JuliaLogo from '../assets/img/JuliaLogo169.jpg'


    
function JuliaCompiler(){
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

    const particlesLoaded = (container) => {
        console.log(container);
    };
    
    return(
        <div className="JuliaCompiler">
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={particlesOptions}
            />
            <NavBar/>
            <Container>
                <Row>
                    <Col>
                        <div className="box">
                            <h2>StudyAngel</h2>

                            <div className="proj-rows">
                                <div>"salkdjflasjlkjaskjfklasjlkdfvjljsvkljsa;lkvdfnu;laksnkjfklasjlkdfkjfklasjlkdfvjljsvkljsa;lkvdfnu;lvjljsvkljsa;lkvdfnu;lfkkjfklasjlkdfvjljsvkljsa;lkvdfn&#10;salkdjflasjlkjaskjfklasjlkdfvjljsvkljsa;lkvdfnu;laksnkjfklasjlkdfkjfklasjlkdfvjljsvkljsa;lkvdfnu;lvjljsvkljsa;lkvdfnu;lfkku;lsjvsld;&#10;salkdjflasjlkjaskjfklasjlkdfvjljsvkljsa;lkvdfnu;laksnkjfklasjlkdfkjfklasjlkdfvjljsvkljsa;lkvdfnu;lvjljsvkljsa;lkvdfnu;lfkku;lsjvsld;"</div>
                                <img src={JuliaLogo}  alt="" />
                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
        
    );

}   

export default JuliaCompiler;