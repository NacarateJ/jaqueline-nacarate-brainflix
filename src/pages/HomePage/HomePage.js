import "./homePage.scss";
import HeroVideo from "../../components/heroVideo/HeroVideo";
import Comments from "../../components/comments/Comments";
import SideBar from "../../components/side-bar/SideBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// const mainVideo = `https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=${process.env.REACT_APP_API_KEY}`;
// const sideBarVideos = `https://project-2-api.herokuapp.com/videos/?api_key=${process.env.REACT_APP_API_KEY}`;

const BACK_END = process.env.REACT_APP_BACKEND_URL;

const HomePage = () => {
  // useState & useEffect for sidedar
  const params = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const videoId = params.videoId;

    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${BACK_END}/api/videos`);
        // if (videoId) {
          const videos = data.filter((video) => video.id !== videoId);
          setVideos(videos);
        // } 
        // else {
        //   const videos = data.filter(
        //     (video) => video.id !== 
        //   );
        //   setVideos(videos);
        // }
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
    if (params.videoId) {
      const videoId = params.videoId;
      setVideoId(params.videoId);
      urlVideoId(videoId);
    } else {
      const defaultVideoId = `${BACK_END}/api/videos/${videoId}`;
      setVideoId(defaultVideoId);
      urlVideoId(defaultVideoId);
    }

    function urlVideoId(videoId) {
      const mainVideo = `${BACK_END}/api/videos/${videoId}`;
      const fetchData = async () => {
        try {
          const { data } = await axios.get(mainVideo);
          setVideoDetails(data);
        } catch (error) {
          console.log("Error", error);
        }
      };
      fetchData();
    }
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
