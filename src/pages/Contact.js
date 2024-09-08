import React, {useEffect, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import "../App.css";
import particlesOptions from "../particles.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Col, Row, Container } from "react-bootstrap";
import KaelHeadshot from "../assets/img/KaelAndersonHeadshot.jpg"
import HIXLab from "../assets/img/HIXLab.jpg"
import HIXLogo from "../assets/img/HIXLogo.png"
import HIXSponsors from "../assets/img/HIXSponsors.png"
    
function Contact(){
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
        <div className="Contact">
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
                            <h2>Contact Me</h2>
                            
                            <div className="contactrows">
                                <img src={KaelHeadshot}  alt=""/>
                                <div>
                                    <div>I'd love to hear from you! Whether you have questions, opportunities, or just want to chat, feel free to reach out.</div>
                                    <div>Address: 1100 South Marietta Parkway, Marietta, GA 30060</div>
                                    <div>Phone: +1 (229) 977-7764</div>
                                    <div>Email: andersonkael6@gmail.com</div>
                                    <div>Linkedin: linkedin.com/in/kael-anderson6/</div>
                                    <div>GitHub: github.com/KaelAnderson</div>
                                </div>
                                
                            </div>
                            

                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
        
    );

}   

export default Contact;