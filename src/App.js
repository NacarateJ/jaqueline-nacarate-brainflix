import "./app.scss";
import Header from "./components/header/Header";
import HeroVideo from "./components/heroVideo/HeroVideo";
import Comments from "./components/comments/Comments";
import SideBar from "./components/side-bar/SideBar";
import { useState } from "react";
import getVideoDetails, { getVideos } from "./utils/utils.js";

const App = () => {
  // Function to define current and default state of videos
  const [vidId, setVidId] = useState("84e96018-4022-434e-80bf-000ce4cd12b8");

  // Function to get only the specified video so it doesnt show on side bar
  // State will be passed as a prop to SideBar (component)
  // SideBar (component) will render it (the prop-state-video) through HTML tags
  const [videos, setVideos] = useState(getVideos(vidId));

  const [videoDetails, setVideoDetails] = useState(getVideoDetails(vidId));

  const handleClick = (clickEvent, videoIdClickedOn) => {
    setVidId(videoIdClickedOn);
    setVideos(getVideos(videoIdClickedOn));
    setVideoDetails(getVideoDetails(videoIdClickedOn));
  };

  return (
    <div className="app">
      <Header />
      <HeroVideo video={videoDetails} />
      <section className="app__container">
        <Comments comments={videoDetails.comments} />
        <SideBar videos={videos} onClick={handleClick} />
      </section>
    </div>
  );
};

export default App;
