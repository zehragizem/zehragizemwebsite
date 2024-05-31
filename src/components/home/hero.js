import { Button, Carousel, Modal, ConfigProvider } from 'antd';
import React, { useState } from 'react';

const AppHero = (props) => {
  const [modalContent, setModalContent] = useState(null);

  const showModal = (videoUrl) => {
    setModalContent(videoUrl);
  };

  const handleCancel = () => {
    setModalContent(null);
  };
  
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultHoverColor: '#d11ba7',
            defaultHoverBorderColor: '#d11ba7',
          }
        }
      }}
    >
      <div id="hero" className="heroBlock">
        <Carousel>
          {props.itemsHeroList.map((item, index) => (
            <div key={item.key} className="container-fluid">
              <div className='content'>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large" href={item.link} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#d11ba7" }}>Github Repository</Button>
                  {index !== 3 && (
                    <Button size="large" onClick={() => showModal(item.video)} className="watch-demo-button">
                      <i className="fas fa-desktop"></i> Watch a Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <Modal
          width={750}
          height={750}
          title="Demo"
          visible={!!modalContent}
          onCancel={handleCancel}
          cancelText="Close"
          closable={false}
          okButtonProps={{ style: { display: 'none' } }}
          cancelButtonProps={{ type: 'primary', style: { backgroundColor: "#d11ba7" } }}

          bodyStyle={{ background: 'rgba(0, 0, 0, 0.5)' }} // Modal arka planını blurla
          wrapClassName="backdrop-backdrop-filter" // Modal arka planını blurlamak için CSS sınıfını ekleyin
        >
          {modalContent && <iframe title='video' width="700" height="700" src={modalContent}></iframe>}
        </Modal>
      </div>
    </ConfigProvider>
  );
}

export default AppHero;
