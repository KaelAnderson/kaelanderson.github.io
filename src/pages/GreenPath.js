import React, {useEffect, useState} from "react";

import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import "../App.css";
import particlesOptions from "../particles.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Col, Row, Container } from "react-bootstrap";
import GreenPathLogo from '../assets/img/GreenPathLogo169.png'
import GreenPathFinalUI from '../assets/img/GreenPathFinalUI.png'
import GreenPathPres from '../assets/img/GreenPathPres.png'
import GreenPathWin from '../assets/img/GreenPathWin.jpg'
import GreenPathIdea from '../assets/img/GreenPathIdea.png'
import KSUSpring2024Hack from '../assets/img/KSUHack2024.jpg'




function GreenPath(){
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
        <div className="GreenPath">
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
                            
                            <h1>GreenPath KSU Spring 2024 Hackathon</h1>


                            <h3>Let the competition begin!</h3>
                            <div className="projrows">
                                <div>
                                    <div>The hackathon started and we decided to go with the challenge from an Assurant, an insurance company. Early in the morning of the competition, they released the theme, “thriving in a connected world”.</div>
                                    <div>When I first began brainstorming for the KSU Spring 2024 Hackathon, my initial idea was inspired by Snapshot by Progressive. My idea was an app that monitors a driver’s habits, like acceleration and braking, to maximize fuel efficiency.</div>
                                </div>
 
                            <img src={KSUSpring2024Hack}  alt=""/>
                            </div>
                            <div className="projbelow">
                                <img src={KSUSpring2024Hack}  alt=""/>
                            </div>


                            <h3>Evolving the Idea</h3>
                            <div className="projrows">
                                <div>
                                    <div>The transition from a driver-monitoring system to a mapping software came from a desire to make the project both practical and applicable within the timeframe. Instead of focusing solely on how a person drives, I began to think about how the routes themselves could play a role in reducing carbon emissions. This led to the concept of GreenPath, a mapping tool that considers a vehicle’s unique miles-per-gallon (MPG) performance to calculate the gas usage and carbon emissions for any given trip.</div>
                                    <div>The core idea was to inform drivers of their environmental impact in real-time. By taking GreenPath, users could track their CO2 reduction, and even share when they hit milestones on social media. This approach shifts the focus from individual driving behavior to making informed decisions on which routes to take. The change also avoids the pitfall of simply monitoring how people drive, which many cars already do with fuel efficiency indicators. </div>
                                </div>
                                <img src={GreenPathIdea}  alt=""/>
                            </div>
                            <div className="projbelow"><img src={GreenPathIdea}  alt=""/></div>
                            


                            <h3>Implementation and Challenges</h3>
                            
                            <div>Once we solidified the concept, the challenge was bringing GreenPath to life within the tight hackathon timeframe. I led the team using a condensed Agile methodology, breaking the project into small tasks and holding frequent check-ins. This approach allowed us to quickly iterate on features like the map display and emissions calculations, while offering feedback and suggestions to each other. We focused on our individual strengths and used Git for simple version control. We wrote most of the project in Python, because it would allow us to quickly create the minumum viable product (MVP)</div>
                            <div>My responsibilities included implementing the map display and handling the backend logic for calculating fuel usage and emissions based on vehicle specs. When I encountered an issue with a Python library missing a necessary experimental feature for green route generation, a teammate and I resolved it by making a JSON curl request to the API despite the complete lack of documentation. In the end, we successfully delivered a working prototype that showcased GreenPath's potential. Users can select their vehicle, starting location, and desired location, and GreenPath will find the most fuel efficient route. It also calculates the exact fuel usage and how much gas you will save by taking the GreenPath rather than the default.</div>
                    
                            
                            <img src={GreenPathFinalUI}  alt=""/>
                            
                            


                            <h3>Writing and presenting</h3>
                            <div className="projrows">
                                <div>
                                    <div>Putting together the presentation for GreenPath was an important part of our project. I focused on clearly explaining the problem we were addressing and how GreenPath provided a solution. We made sure to highlight how the app helps users choose more eco-friendly routes and track their CO2 reduction.</div>
                                    <div>When it was time to present, my team and I guided the audience and judges through our project, showcasing its key features and demonstrating how it worked. We explained the social aspect of sharing CO2 reduction milestones and how it tied into the hackathon's theme. During the Q&A, the judges probed our ideas for weaknesses, challenging us to defend our decisions. We were well-prepared, confidently answering their critiques and providing solid reasons for our choices. The live demo further reinforced our work, and the positive feedback we received made all the effort worthwhile.</div>
                                </div>
 
                                <img src={GreenPathPres}  alt="" />
                            </div>
                            <div className="projbelow"><img src={GreenPathPres}  alt="" /></div>
                            

                            <h3>Reflecting on the Experience</h3>
                            <div className="projrows">
                                <div >Winning 1st place at the KSU Spring 2024 Hackathon was a tremendous validation of our efforts. It was an honor to be invited to present GreenPath to stakeholders at the headquarters of Assurant. This experience taught me the value of staying adaptable and open to new ideas. I’m proud of what we accomplished and I feel that I have grown as a software dev.
                                </div>
                                
                                <img src={GreenPathWin}  alt=""/>
                                
                            </div>
                            <div className="projbelow"><img src={GreenPathWin}  alt="" /></div>
                            
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer/>
        </div>
        
    );

}   

export default GreenPath;