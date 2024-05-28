import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col, ConfigProvider } from 'antd';
import Message from "../../assets/images/contact-img.svg";
const { TextArea } = Input;

function AppContact() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#d11ba7',
          colorPrimaryHover: '#d11ba7', // Örnek bir renk tokenı
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
                        message: 'The input is not valid E-mail!',
                      },
                      {
                        required: true,
                        message: 'Please input your E-mail!',
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
                <Button type='primary' htmlType="submit" className="login-form-button" >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </ConfigProvider>

  );
}

export default AppContact;