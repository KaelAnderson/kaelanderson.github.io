import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import colorSharp from '../assets/img/color-sharp.png';
import 'animate.css';
import TrackVisibility from "react-on-screen";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import GreenPathLogo from '../assets/img/GreenPathLogo169.png'
import StudyAngelLogo from '../assets/img/StudyAngelLogo169.png'
import JuliaLogo from '../assets/img/JuliaLogo169.jpg'
import scroll from 'react-scroll';


export const Projects = () => {
    
    const scrollToTop = () => {
        scroll.scrollToTop();
      };

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
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <div className="project-bx">
                            <h2>Projects</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eaque praesentium aspernatur atque ea voluptatem, amet eum vel       IVI
                            </p>
                            <div >
                            <Slider {...settings1} className="slider1">
                                <div>
                                    <h4>GreenPath</h4>
                                    <Link to="/GreenPath" onClick={scrollToTop}>
                                        <img src={GreenPathLogo} alt="" />
                                    </Link>
                                    
                                </div>
                                <div>
                                    <h4>StudyAngel</h4>
                                    <Link to="/StudyAngel" onClick={scrollToTop}>
                                        <img src={StudyAngelLogo} alt="" />
                                    </Link>
                                </div>
                                <div>
                                    <h4>Julia Compiler</h4>
                                    <Link to="/JuliaCompiler" onClick={scrollToTop}>
                                        <img src={JuliaLogo} alt="" />
                                    </Link>
                                </div>
                            </Slider>
                            <Slider {...settings2} className="slider2">
                                <div>
                                    <h4>GreenPath</h4>
                                    <Link to="/GreenPath" onClick={scrollToTop}>
                                        <img src={GreenPathLogo} alt="" />
                                    </Link>
                                    
                                </div>
                                <div>
                                    <h4>StudyAngel</h4>
                                    <Link to="/StudyAngel" onClick={scrollToTop}>
                                        <img src={StudyAngelLogo} alt="" />
                                    </Link>
                                </div>
                                <div>
                                    <h4>Julia Compiler</h4>
                                    <Link to="/JuliaCompiler" onClick={scrollToTop}>
                                        <img src={JuliaLogo} alt="" />
                                    </Link>
                                </div>
                            </Slider>
                            <Slider {...settings3} className="slider3">
                                <div>
                                    <h4>GreenPath</h4>
                                    <Link to="/GreenPath" onClick={scrollToTop}>
                                        <img src={GreenPathLogo} alt="" />
                                    </Link>
                                    
                                </div>
                                <div>
                                    <h4>StudyAngel</h4>
                                    <Link to="/StudyAngel" onClick={scrollToTop}>
                                        <img src={StudyAngelLogo} alt="" />
                                    </Link>
                                </div>
                                <div>
                                    <h4>Julia Compiler</h4>
                                    <Link to="/JuliaCompiler" onClick={scrollToTop}>
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
