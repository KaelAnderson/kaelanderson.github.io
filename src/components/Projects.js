import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import 'animate.css';
import React  from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import GreenPathLogo from '../assets/img/GreenPathLogo169.png'
import StudyAngelLogo from '../assets/img/StudyAngelLogo169.png'
import JuliaLogo from '../assets/img/JuliaLogo169.jpg'
import {animateScroll as scroll} from 'react-scroll'
import HIXLogo from "../assets/img/HIXLogo.png"


export const Projects = () => {
    
    
    var settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
      };
    var settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
      };
      var settings3 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
      };

      
    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <div className="project-bx">
                            <h2>Projects</h2>
                            <p>
                            From winning hackathon projects to novel research in VR and machine learning, my portfolio shows a variety of challenges I've tackled and stuff I've made.
                            </p>
                            <div >
                            <Slider {...settings1} className="slider1">
                                <div>
                                    <h4>GreenPath</h4>
                                    <Link to="/GreenPath" >
                                         
                                        <img src={GreenPathLogo} alt="" />
                                    </Link>
                                </div>
                                <div>
                                    <h4>StudyAngel</h4>
                                    <Link to="/StudyAngel" >
                                         
                                        <img src={StudyAngelLogo} alt="" />
                                    </Link>
                                </div>
                                <div>
                                    <h4>Undergrad Research</h4>
                                    <Link to="/KSUResearch" >
                                         
                                        <img src={HIXLogo} alt="" />
                                    </Link>
                                </div>
                                <div>
                                    <h4>Julia Compiler</h4>
                                    <Link to="/JuliaCompiler" >
                                         
                                        <img src={JuliaLogo} alt="" />
                                    </Link>
                                </div>
                            </Slider>
                            <Slider {...settings2} className="slider2">
                                <div>
                                    <h4>GreenPath</h4>
                                    <Link to="/GreenPath">
                                         
                                        <img src={GreenPathLogo} alt="" />
                                    </Link>
                                    
                                </div>
                                <div>
                                    <h4>StudyAngel</h4>
                                    <Link to="/StudyAngel">
                                         
                                        <img src={StudyAngelLogo} alt="" />
                                    </Link>
                                </div>
                                <div>
                                    <h4>Undergrad Research</h4>
                                    <Link to="/KSUResearch" >
                                         
                                        <img src={HIXLogo} alt="" />
                                    </Link>
                                </div>
                                <div>
                                    <h4>Julia Compiler</h4>
                                    <Link to="/JuliaCompiler">
                                         
                                        <img src={JuliaLogo} alt="" />
                                    </Link>
                                </div>
                            </Slider>
                            <Slider {...settings3} className="slider3">
                                <div>
                                    <h4>GreenPath</h4>
                                    <Link to="/GreenPath">
                                         
                                        <img src={GreenPathLogo} alt="" />
                                    </Link>
                                    
                                </div>
                                <div>
                                    <h4>StudyAngel</h4>
                                    <Link to="/StudyAngel">
                                         
                                        <img src={StudyAngelLogo} alt="" />
                                    </Link>
                                </div>
                                <div>
                                    <h4>Undergrad Research</h4>
                                    <Link to="/KSUResearch" >
                                         
                                        <img src={HIXLogo} alt="" />
                                    </Link>
                                </div>
                                <div>
                                    <h4>Julia Compiler</h4>
                                    <Link to="/JuliaCompiler">
                                         
                                        <img src={JuliaLogo} alt="" />
                                    </Link>
                                </div>
                            </Slider>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}
