import "./app.scss";
import Header from "./components/header/Header";
import HeroVideo from "./components/heroVideo/HeroVideo";
import Comments from "./components/comments/Comments";
import SideBar from "./components/side-bar/SideBar";
import { useEffect, useState } from "react";
import getVideoDetails, { getVideos } from "./utils/utils.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";


const mainVideo = `https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=${process.env.REACT_APP_API_KEY}`;
const sideBarVideos = `https://project-2-api.herokuapp.com/videos/?api_key=${process.env.REACT_APP_API_KEY}`;


const App = () => {
  // Function to define current and default state of videos
  const [vidId, setVidId] = useState("84e96018-4022-434e-80bf-000ce4cd12b8");

  // Function to get only the specified video so it doesnt show on side bar
  // State will be passed as a prop to SideBar (component)
  // SideBar (component) will render it (the prop-state-video) through HTML tags
  const [videos, setVideos] = useState(getVideos(vidId));
  const [videoDetails, setVideoDetails] = useState(getVideoDetails(vidId));

  // const handleClick = (clickEvent, videoIdClickedOn) => {
  //   setVidId(videoIdClickedOn);
  //   setVideos(getVideos(videoIdClickedOn));
  //   setVideoDetails(getVideoDetails(videoIdClickedOn));
  // };


 useEffect(() => {
   const fetchData = async () => {
     try {
       const { data } = await axios.get(mainVideo);
       console.log(data);
     } catch (error) {
       console.log("Error", error);
     }
   };
   fetchData();
 }, []);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(sideBarVideos);
        console.log(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <Header />
      <HeroVideo video={videoDetails} />
      <section className="app__container">
        <Comments video={videoDetails} />
        <SideBar videos={videos} />
      </section>
    </div>
  );
};

export default App;
