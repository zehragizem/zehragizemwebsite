import React from 'react';
import AppHero from '../components/home/hero';
import AppFeature from '../components/home/feature';
import { Banner } from '../components/home/banner';
import AppContact from '../components/home/contact';
import Video from "../assets/videos/video.mp4";
import Video2 from "../assets/videos/video2.mp4";
import Video3 from "../assets/videos/video3.mp4";
import Video4 from "../assets/videos/Video4.mp4";
import Video5 from "../assets/videos/video5.mp4";
const items = [
  {
    key: '1',
    title: 'Travelog Project',
    content: 'Travelog is a platform designed to help travelers effectively record, organize, and share their Istanbul travel experiences. Serving as both a personal journal and a community hub, Travelog enables users to personalize their trips digitally, save favorite locations, view destinations on a map, and share reviews to connect with other travel enthusiasts.Travelog is a mobile application with a Kotlin-based frontend, a C# backend, and MySQL for data storage.',
    icon: <i className="fas fa-chart-pie"></i>,
    link: "https://github.com/orgs/TravelTeamApp/repositories",
    video:Video5,
  },
  {
    key: '2',
    title: 'Design Patterns Project',
    content: 'This project showcases the implementation of various design patterns in Flutter, such as Singleton, Factory, and Observer patterns. It provides practical examples and explanations of each patterns usage in Flutter app development.',
    icon: <i className="fas fa-chart-pie"></i>,
    link: "https://github.com/zehragizem/Design_Patterns_Flutter",
    video:Video3,
  },
  {
    key: '3',
    title: 'Multi Task Scheduler Project ',
    content: 'I utilized Nocodeapi while working on this project. All data related to users in the project is stored in the API. Operations such as adding, deleting, editing, and listing are performed with data fetched from and sent to the API. I used the Axios library for GET, POST, PUT, and DELETE operations. Additionally, I used Ant Design for the design part. If you want to plan your tasks and view them in a calendar and timeline, you can use this application. These operations can be done for each user.',
    icon: <i className="fas fa-chart-pie"></i>,
    link: "https://github.com/zehragizem/GorevPlanlayici_React",
    video:Video4,
  },
  {
    key: '4',
    title: "THOR Project",
    content: "We developed this project with my classmates with the aim of enabling students at Trakya University to communicate, follow announcements, interact with each other, and share information about the school. We utilized Flutter for this project.",
    icon: <i className="fas fa-chart-pie"></i>,
    link: "https://github.com/zehragizem/AsgardTeam_Flutter",
    video:Video
  },
  {
    key: '5',
    title: "C Backend Projects",
    content: "In this project, you can find my basic level codes and advanced level codes for data structures using the C language.",
    icon: <i className="fas fa-database"></i>,
    link: "https://github.com/zehragizem/C-PROJECT"
  },
  
  {
    key: '6',
    title: 'Flutter Login Project',
    content:"I have created a basic level login project using Flutter, which requires further development. My plan is to extend this project by developing a food delivery app.",
    icon: <i className="fas fa-desktop"></i>,
    link: "https://github.com/zehragizem/LoginOrRegister",
    video:Video2
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