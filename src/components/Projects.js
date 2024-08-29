import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import { ProjectCard } from "./ProjectCard";
import colorSharp from '../assets/img/color-sharp.png';
import 'animate.css';
import TrackVisibility from "react-on-screen";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export const Projects = () => {
    

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
                            <Slider {...settings}>

                                <div>
                                    <h4>GreenPath</h4>
                                    
                                    <img src={projImg1} alt="" />
                                    
                                </div>
                                <div>
                                    <h4>StudyAngel</h4>
                                    <img src={projImg1} alt="" />
                                    
                                </div>
                                <div>
                                    <h4>Julia Compiler</h4>
                                    <img src={projImg1} alt="" />
                                    
                                </div>
                                
                            </Slider>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <img src={colorSharp} alt="" className="background-image-left" />
        </section>
    )
}
