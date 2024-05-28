import React from "react";
import { Row, Col } from 'antd';

const AppAbout = (props) => {

    return (
        <div id="about" className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>About Me</h2>
                    <p>YAptıklarım projelerim kişisel bilgilerim</p>
                </div>
                <div className="contentHolder">
                    <p>Trakya Üniversitesi Bilgisayar Mühendisliği 3. sınıf öğrencisiyim.
                        Derslerime gereken önemi göstererek 1. ve 2. sınıftaki
                        ortalamalarımla sınıf birinciliğini elde ettim. Python, C, 8086
                        Assembly, Java, Flutter ve Dart programlama dillerini öğrendim.
                        Flutter kullanarak 2 adet proje geliştirdim.</p>
                </div>
                <Row gutter={[16, 16]}>
                    {props.itemsAboutList.map(item => {
                        return (
                            <Col span={8} key={item.key}>
                                <div className="content">
                                    <div className="icon">
                                        {item.icon}
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                </div>

                            </Col>

                        );
                    }

                    )}
                </Row>

            </div>

        </div>
    );
}

export default AppAbout;