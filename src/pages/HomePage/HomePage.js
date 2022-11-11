import "./homePage.scss";
import HeroVideo from "../../Components/heroVideo/HeroVideo";
import Comments from "../../Components/comments/Comments";
import SideBar from "../../Components/side-bar/SideBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// const mainVideo = `https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=${process.env.REACT_APP_API_KEY}`;
const sideBarVideos = `https://project-2-api.herokuapp.com/videos/?api_key=${process.env.REACT_APP_API_KEY}`;

const HomePage = () => {
  // useState & useEffect for sidedar
  const params = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const videoId = params.videoId;
    const fetchData = async () => {
      try {
        const { data } = await axios.get(sideBarVideos);
        // console.log(data);
        const videos = data.filter(
          (video) =>
            //  console.log(video.id);
            video.id !== videoId
        );

        // console.log(data);
        setVideos(videos);
        // console.log(videos);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchData();
  }, [params.videoId]);

  // useState & useEffect for Hero Video and Comments
  const [videoDetails, setVideoDetails] = useState({});
  const [videoId, setVideoId] = useState();

  useEffect(() => {
    // console.log(params.videoId);
    if (params.videoId) {
      setVideoId(params.videoId);
    }
    else {
      setVideoId ("84e96018-4022-434e-80bf-000ce4cd12b8");
    }

    const mainVideo = `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${process.env.REACT_APP_API_KEY}`;
    const fetchData = async () => {
      try {
        const { data } = await axios.get(mainVideo);
        // console.log(data);
        setVideoDetails(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchData();
  }, [params.videoId, videoId]);

  return (
    <section className="app">
      <HeroVideo video={videoDetails} />
      <section className="app__container">
        <Comments video={videoDetails} />
        <SideBar videos={videos} />
      </section>
    </section>
  );
};

export default HomePage;
