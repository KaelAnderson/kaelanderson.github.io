import { Col, Container, Row } from "react-bootstrap"

import logo from "../assets/img/FullLogoSVG.svg"
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    

                    <Col sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>

                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/kael-anderson6/" aria-label='Linkedin' rel='noopener' target='_blank'>
                                <img src={navIcon1} alt="" />
                            </a>
                            <a href="https://github.com/KaelAnderson" aria-label='GitHub' rel='noopener' target='_blank'>
                                <img src={navIcon2} alt="" />
                            </a>
                            
                        </div>

                        <p>CopyRight 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
