import "./heroVideo.scss";
import React from "react";
import { formatDistance } from "date-fns";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const mainVideo = `https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=${process.env.REACT_APP_API_KEY}`;

const HeroVideo = ({ videos }) => {
  // Function to get only the specified video so it doesnt show on side bar
  const [videoDetails, setVideoDetails] = useState({});

  // const searchByVideoId = async (videoId) => {
  //   const { data } = await axios.get(searchByVideoId(videoId));
  //   setVideoDetails(sideBarVideos);
  // };
  // const params = useParams
  const { videoId } = useParams();
  const { image } = videoDetails;

  // useEffect(() => {
  //   searchByVideoId(videoId);
  // }, [videoId]);

  useEffect(() => {
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
  }, []);

  return (
    Object.keys(videoDetails).length > 0 && (
      <main className="hero">
        <section className="hero__video-wrapper">
          <video
            className="hero__video"
            poster={videoDetails.image}
            controls
          ></video>
        </section>
      </main>
    )
  );
};

export default HeroVideo;
