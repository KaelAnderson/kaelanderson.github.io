import React, {useEffect, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import "../App.css";
import particlesOptions from "../particles.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Col, Row, Container } from "react-bootstrap";
import StudyAngelLogo from '../assets/img/StudyAngelLogo169.png'


    
function StudyAngel(){
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
        <div className="StudyAngel">
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
                                <div>"salkdjflasjlkjaskjfklasjlkdfvjljsvkljsa;lkvdfnu;laksnkjfklasjlkdfkjsvkljsa;lkvdfn&#10;salkdjflasjlkjaskjfklasjlkdfvjljsvkljsa;lkvdfnu;laksnkjfklasjlkdfksvkljsa;lkvdfnu;lvjljsvkljsa;lkvdfnu;lfkku;lsjvsld;&#10;salkdjflasjlkjaskjfklasjlkdfvjljsvkljsa;lkvdfnu;laksnkjfklasjlkdfkjfkljvsld;"</div>
                                <img src={StudyAngelLogo}  alt="" />
                            </div>
                            <div className="proj-rows">
                                <div>"salkdjflasjlkjaskjfklasjlkdfvjljsvkljsa;lkvdfnu;laksnkjfklasjlkdfkjfklasjlkdfvjljsa;lkvdfnu;lfkkjfklasjlkdfvjljsvkljsa;lkvdfn&#10;salkdjflasjlkjaskjfklasjlkdfvjljsvkljsa;lkvdfnu;laksnfvjljsvkljsa;lkvdfnu;lvjljsvkljsa;lkvdfnu;lfkku;lsjvsld;&#10;salkdjflasjlkjaskjfklasjlkdfvjnu;laksnkjfklasjlkdfkjfklasjlkdfvjljsvkljsa;lkvdfnu;lvjljsvkljsa;lkvdfnu;lfkku;lsjvsld;"</div>
                                <img src={StudyAngelLogo}  alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
        
    );

}   

export default StudyAngel;