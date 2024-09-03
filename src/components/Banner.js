import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/Cartoon Moon.png'
import earth from '../assets/img/Earth.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen'



export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Engineer", "Research Assistant", "CS Undergrad"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1500;
    

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    
    

    return (
        <section className='banner' id='home'>

            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={12} xl={8}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    

                                    <h1>
                                        {`Hello, I'm Kael, and I'm a...`} <span className='wrap'> {"\n " + text + " "}</span>
                                    </h1>

                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni commodi sunt corporis ducimus veniam tempore explicabo incidunt dignissimos dicta mollitia?
                                    </p>

                                    <button onClick={() => console.log('connect')}>
                                        Let's connect <ArrowRightCircle size={25} />
                                    </button>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={3} xl={3} className='right-orbit'>
                        <figure class="system">
                            <span class="planet"><img src={earth}></img></span>
                            <span class="moon"><img src={headerImg}></img></span>
                        </figure>
                    </Col>
                </Row>
                <Row className='below-orbit'>
                    <figure class="system">
                        <span class="planet"><img src={earth}></img></span>
                        <span class="moon"><img src={headerImg}></img></span>
                    </figure>
                </Row>
            </Container>
        </section>
    )
}
