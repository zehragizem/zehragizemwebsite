import React from 'react';
import AppHero from '../components/home/hero';
import AppFeature from '../components/home/feature';
import { Banner } from '../components/home/banner';
import AppContact from '../components/home/contact';
import Video from "../assets/videos/video.mp4";
import Video2 from "../assets/videos/video2.mp4";
import Video3 from "../assets/videos/video3.mp4";
const items = [
  {
    key: '1',
    title: 'Design Patterns Project',
    content: 'This project showcases the implementation of various design patterns in Flutter, such as Singleton, Factory, and Observer patterns. It provides practical examples and explanations of each patterns usage in Flutter app development.',
    icon: <i className="fas fa-chart-pie"></i>,
    link: "https://github.com/zehragizem/Design_Patterns_Flutter",
    video:Video3,
  },
  {
    key: '2',
    title: "THOR Project",
    content: "We developed this project with my classmates with the aim of enabling students at Trakya University to communicate, follow announcements, interact with each other, and share information about the school. We utilized Flutter for this project.",
    icon: <i className="fas fa-database"></i>,
    link: "https://github.com/zehragizem/AsgardTeam_Flutter",
    video:Video
  },
  {
    key: '3',
    title: 'Flutter Login Project',
    content:"I have created a basic level login project using Flutter, which requires further development. My plan is to extend this project by developing a food delivery app.",
    icon: <i className="fas fa-desktop"></i>,
    link: "https://github.com/zehragizem/LoginOrRegister",
    video:Video2
  },
  
  {
    key: '4',
    title: "C Backend Project",
    content: "In this project, you can find my basic level codes and advanced level codes for data structures using the C language.",
    icon: <i className="fas fa-database"></i>,
    link: "https://github.com/zehragizem/C-PROJECT"
  },
];

function AppHome() {
  return (
    <div className="main">
      <Banner></Banner>
      <AppFeature></AppFeature>
      <AppHero itemsHeroList={items}/>
      <AppContact></AppContact>



    </div>
  );
}

export default AppHome;
/*    <AppAbout itemsAboutList={items}/> */