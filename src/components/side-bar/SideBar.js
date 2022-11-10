import "./sideBar.scss";
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const sideBarVideos = `https://project-2-api.herokuapp.com/videos/?api_key=${process.env.REACT_APP_API_KEY}`;

const SideBar = () => {
  const [videos, setVideos] = useState([]);

 useEffect(() => {
   const fetchData = async () => {
     try {
       const { data } = await axios.get(sideBarVideos);
        // console.log(data);
       setVideos(data);
     } catch (error) {
       console.log("Error", error);
     }
   };
   fetchData();
 }, []);


  return (
    <aside className="sidebar">
      <p className="sidebar__caption">NEXT VIDEOS</p>
      {videos.map((video) => (
        <div className="sidebar__thumbnails-wrapper" key={video.id}>
          <div className="sidebar__thumbnails">
            {/* <Link to={`/videos/${video.id}`}> */}
              <img
                className="sidebar__thumbnails-img"
                src={video.image}
                alt={video.title}
              ></img>
            {/* </Link> */}
          </div>
          <div className="sidebar__text-wrapper">
            <p className="sidebar__title">{video.title}</p>
            <p className="sidebar__channel">{video.channel}</p>
          </div>
        </div>
      ))}
    </aside>
  );
};

export default SideBar;
