import React, {useEffect, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import "../App.css";
import particlesOptions from "../particles.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Col, Row, Container } from "react-bootstrap";
import HIXCrew from "../assets/img/HIXCrew.jpg"
import HIXLab from "../assets/img/HIXLab.jpg"
import HIXLogo from "../assets/img/HIXLogo.png"
import HIXSponsors from "../assets/img/HIXSponsors.png"
    
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
                            <h2>KSU Undergraduate Research</h2>

                            <h3>On your mark, get ready, Start!</h3>
                            <div className="projrows">
                                <div>
                                    <div>In April 2023, a professor of mine introduced me to a research opportunity that aligned perfectly with my interests and skills. After reaching out to Dr. Rifatul Islam, the Director of HIX Lab, I discussed my background and passion for VR. Following our conversation, Dr. Islam invited me to join the team as an undergraduate research assistant—a role that has allowed me to dive deeper into both research and VR technology.</div>
                                </div>
 
                            <img src={HIXLogo}  alt=""/>
                            </div>
                            <div className="projbelow">
                                <img src={HIXLogo}  alt=""/>
                            </div>

                            <h3>Weekly Writing Group</h3>
                            <div className="projrows">
                                <div>
                                    <div>One of my key responsibilities involves participating in our weekly writing group. Each week, we are tasked with reading and summarizing a research article in a formal scientific format. After completing our papers, we exchange them with other members of the group, providing suggestions and critiques to help each other refine our writing. This process has been invaluable in developing the skills needed to produce work that meets the standards for publication.</div>
                                </div>
 
                            <img src={HIXCrew}  alt=""/>
                            </div>
                            <div className="projbelow">
                                <img src={HIXCrew}  alt=""/>
                            </div>

                            <h3>VR Cybersickness Mitigation Using Machine Learning</h3>
                            <div className="projrows">
                                <div>
                                    <div>Another significant aspect of my work involves developing solutions to combat motion sickness in virtual reality, also known as CyberSickness. I contributed to a project that uses machine learning to predict when a person might experience CyberSickness. My role was to create a variable foveal Gaussian blur that adjusts its intensity based on the algorithm's predictions. This blur algorithm steps in at the right moment to reduce the symptoms of CyberSickness, enhancing the overall VR experience for users.</div>
                                </div>
 
                            <img src={HIXLab}  alt=""/>
                            </div>
                            <div className="projbelow">
                                <img src={HIXLab}  alt=""/>
                            </div>

                            <h3>Looking Ahead</h3>
                            <div className="projrows">
                                <div>
                                    <div>My time as a research assistant has been both challenging and rewarding, offering me a chance to contribute to innovative research while sharpening my technical and writing skills. I'm excited to continue pushing the boundaries of VR and machine learning, both in this role and in future projects. Thank you to our sponsors for allowing me to work on this important and impactful research!</div>
                                </div>
 
                            <img src={HIXSponsors}  alt=""/>
                            </div>
                            <div className="projbelow">
                                <img src={HIXSponsors}  alt=""/>
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