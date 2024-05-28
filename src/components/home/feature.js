import { Row, Col } from "antd";
import React from "react";
import { Card } from 'antd';
import Image1 from "../../assets/images/cc.png";
import Image2 from "../../assets/images/python.svg";
import Image3 from "../../assets/images/flutterjpg.jpg";
import Image4 from "../../assets/images/java.jpg";
import Image5 from "../../assets/images/react.png";
import Image6 from "../../assets/images/JavaScript.png";
const { Meta } = Card;

function AppFeature() {
    // Resimler ve açıklamaları bir liste içinde tanımla
    const features = [
        { image: Image1, title: "C", description: "C programlama dili" },
        { image: Image3, title: "Flutter", description: "Flutter framework" },
        { image: Image2, title: "Python", description: "Python programlama dili" },
        { image: Image4, title: "Java", description: "Java programlama dili" },
        { image: Image5, title: "React", description: "Python programlama dili" },
        { image: Image6, title: "JavaScript", description: "Python programlama dili" },
    ];

    return (
        <div id="feature" className="block featureBlock bgGray">
            <div className="container-skills">
                <h1>Skills</h1>
                <Row gutter={[40, 24]}>
                    {features.map((feature, index) => (
                        <Col key={index} span={8}>
                            <Card className="cardfeature"
                                hoverable
                                bordered

                            >
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '50%' }}>

                                    <img alt={feature.title} src={feature.image} style={{ width: '70%', height: '150px', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', bottom: '0', width: '100%', color: 'white', padding: '4px' }}>
                                        <Meta
                                            title={feature.title}
                                        />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default AppFeature;
