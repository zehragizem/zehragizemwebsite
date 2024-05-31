import React, { useState,useRef } from 'react';
import { Form, Input, Button, Checkbox, Row, Col, ConfigProvider, Modal } from 'antd';
import Message from "../../assets/images/contact-img.svg";
const { TextArea } = Input;

function AppContact() {
  const [isModalVisible, setModalVisible] = useState(false);
  const formRef = useRef(null);

  const openModal = () => {
    setModalVisible(true);
    formRef.current.resetFields();
  }
  const closeModal = () => {
    setModalVisible(false);
  };

  const onFinish = (values) => {
    console.log('Received values:', values);
    openModal(); // Form gönderildiğinde modalı aç
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#d11ba7',
          colorPrimaryHover: '#5b10b5', // Örnek bir renk tokenı
          colorText:"#d11ba7",
          //colorBgMask:"#d11ba7"
        },
        

      }}
    >
      <div id="contact" className="contact">
        <div className="contentHolder">
          <div className="left">
            <img src={Message} alt="Contact" width={750} />
          </div>
          <div className="right">
            <div className="titleHolder">
              <h2>Get in Touch</h2>
              <p>Feel free to email us anytime for collaborations and communication</p>
            </div>
            <Form
              name="contact_form"
              className="contact-form"
              initialValues={{ remember: false }}
              onFinish={onFinish} // Form gönderildiğinde onFinish çağrılır
              ref={formRef}
            >
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Form.Item
                    name="fullname"
                    rules={[{ required: true, message: 'Please enter your full name!' }]}
                  >
                    <Input placeholder="Full Name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        type: 'email',
                        message: 'Please enter a valid E-mail address!',
                      },
                      {
                        required: true,
                        message: 'Please input your E-mail address!',
                      },
                    ]}
                  >
                    <Input placeholder="Email Address" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Form.Item name="telephone"
                    rules={[
                      {
                        pattern: /^0\d{10}$/,
                        message: 'Telephone number must start with 0 and have 11 characters!',
                      },
                    ]}
                  >
                    <Input placeholder="Telephone" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="subject"
                  >
                    <Input placeholder="Subject" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                name="message"
              >
                <TextArea placeholder="Message" />
              </Form.Item>
              <Form.Item>
                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  noStyle
                  rules={[
                    { validator: (_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
                  ]}
                >
                  <Checkbox style={{ color: 'white' }} >I agree with terms and conditions.</Checkbox>

                </Form.Item>
              </Form.Item>
              <Form.Item>
                <Button type='primary' htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
            <Modal
              
              centered
              visible={isModalVisible}
              onCancel={closeModal}
              cancelText="Close"
              closable={false}
              cancelButtonProps={{ type: 'primary' }}
              okButtonProps={{ style: { display: 'none' } }}
              wrapClassName="backdrop-backdrop-filter"
             
            >
              {isModalVisible && <h2 style={{textAlign:"center"}}>Sent Successfully!</h2>}
            </Modal>

          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default AppContact;
