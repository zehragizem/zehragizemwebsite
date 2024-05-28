import React from 'react';
import { Anchor, ConfigProvider } from 'antd';
import './header.css';
import { GithubOutlined, LinkedinFilled } from '@ant-design/icons';

const { Link } = Anchor;

function AppHeader() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: 'white',
          colorPrimary: '#d818ff', // Örnek bir renk tokenı
          fontSize: '16px', // Örnek bir font büyüklüğü tokenı
          spacing: '8px', // Örnek bir boşluk tokenı
          lineHeight: 1,

        },

      }}
    >
      <div className='container-fluid'>
        <div className="header">
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Anchor targetOffset="65" className="ant-anchor-wrapper">
              <Link href="#banner" title="Home" />
              <Link href="#feature" title="Skills" />
              <Link href="#hero" title="Project" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </div>
          <div className="icon-container">
            <a href="https://github.com/zehragizem" target="_blank" rel="noopener noreferrer" className="github">
              <GithubOutlined style={{ fontSize: '18px', color: '#fff' }} />
            </a>
            <a href="https://www.linkedin.com/in/zehra-gizem-duman-344952237" target="_blank" rel="noopener noreferrer" className="linkedin">
              <LinkedinFilled style={{ fontSize: '18px', color: '#fff' }} />
            </a>

          </div>
        </div>
      </div>




    </ConfigProvider>
  );
}

export default AppHeader;
