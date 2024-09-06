import React, {useEffect, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import "../App.css";
import particlesOptions from "../particles.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Col, Row, Container } from "react-bootstrap";
import KSUFall2023Hack from "../assets/img/KSUFall2023Hack.png"
import LangChainLogo from "../assets/img/LangChainLogo.png"
import StudyAngelContributions from "../assets/img/StudyAngelContributions.png"
import StudyAngelPlan from "../assets/img/StudyAngelPlan.png"
import StudyAngelScope from "../assets/img/StudyAngelScope.png"

    
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
                            <h2>StudyAngel KSU Fall 2023 Hackathon</h2>

                            <h3>On your mark, get ready, Start!</h3>
                            <div className="projrows">
                                <div>
                                    <div>It was early in the morning, and my team was refreshing the challenge website. We were eager, and ready to start. The challenge was released, and we quickly decided on an idea. It was the start of the AI boom, and we had been researching tools and technologies to use. We landed on making a study assistant who could create practice problems and solve them intelligently.</div>
                                </div>
 
                            <img src={KSUFall2023Hack}  alt=""/>
                            </div>
                            <div className="projbelow">
                                <img src={KSUFall2023Hack}  alt=""/>
                            </div>

                            <h3>Choosing Our Tools</h3>
                            <div className="projrows">
                                <div>
                                    <div>We wanted to use LangChain, which allows language models to perform many actions. An example of the possible tools would be the ability to use the Wikipedia API to get general and historical knowledge of any topic, or SerpAPI, which can autonomously perform internet searches and read the results.</div>
                                </div>
 
                            <img src={LangChainLogo}  alt=""/>
                            </div>
                            <div className="projbelow">
                                <img src={LangChainLogo}  alt=""/>
                            </div>

                            <h3>Building StudyAngel</h3>
                            <div className="projrows">
                                <div>
                                    <div>The idea for StudyAngel came naturally as we thought about the struggles students face in keeping up with their studies. We envisioned a web-app that would not only generate practice questions but also explain the solutions, providing an interactive learning experience. As we divided up tasks, my focus was on constructing the core functionality of the web application, ensuring it was user-friendly and robust. We integrated the language model functions, refining the user interface, and testing our system with real study material. We used GitHub for version control, dividing the work based on our individual strengths. This allowed us to work more efficiently and focus on our areas of expertise.</div>
                                </div>
 
                            <img src={StudyAngelPlan}  alt=""/>
                            </div>
                            <div className="projbelow">
                                <img src={StudyAngelPlan}  alt=""/>
                            </div>

                            <h3>Developing the Core Features</h3>
                            <div className="projrows">
                                <div>
                                    <div>My contributions were integral to making StudyAngel come to life. I focused on getting LangChain up and running, setting up the tools it needed to function effectively. Initially, I had configured it with Hugging Face models, but as the project evolved, I decided to switch to a more advanced GPT model to enhance the AI's capabilities. Additionally, I worked on connecting the frontend with the backend, ensuring a smooth and responsive user experience. Finally, I contributed to the presentation, helping to showcase our hard work to the judges.</div>
                                </div>
 
                            <img src={StudyAngelContributions}  alt=""/>
                            </div>
                            <div className="projbelow">
                                <img src={StudyAngelContributions}  alt=""/>
                            </div>

                            <h3>The Final Stretch and Reflections</h3>
                            <div className="projrows">
                                <div>
                                    <div>As the hackathon deadline approached, we polished our project and prepared for the presentation. As this was during the time when LLMs were getting popular, there were several projects that had similar approaches. Regardless,  we secured 2nd place, a testament to our commitment and innovative approach. I'm proud of what we accomplished as a team, but I learned that in future hackathons we would need to be more unique if we wanted to get 1st.</div>
                                </div>
 
                            <img src={StudyAngelScope}  alt=""/>
                            </div>
                            <div className="projbelow">
                                <img src={StudyAngelScope}  alt=""/>
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