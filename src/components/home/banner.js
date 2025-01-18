import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import vesikalık from "../../assets/images/vesikalık.jpg";
import 'animate.css';
import "./banner.css";
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Sofware Developer", "Frontend Developer"];
    const period = 450;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

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
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(350);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="banner">
            <Row style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center" }}>
                {/* Metinler bölümü */}
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{`Hi! I'm Gizem`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                                <p>I am currently a 4th-year Computer Engineering student at Trakya University. Throughout my academic journey, I have sharpened my problem-solving and analytical skills while maintaining an open attitude towards learning. I am dedicated to staying updated with industry innovations. Alongside my studies, I work part-time, which has allowed me to gain valuable hands-on experience and apply my knowledge in real-world scenarios. As an energetic and ambitious aspiring computer engineer, I am eager to further expand my practical experience in the software industry.</p>
                            
                            </div>}
                    </TrackVisibility>
                </Col>
                {/* Resim bölümü */}
                <Col >
                    <div class="content">
                        <img src={vesikalık} alt="Header Img" />
                    </div>
                </Col>
            </Row>
        </section>

    )
}
export default Banner;