import "./sideBar.scss";
import React from "react";
import { Link } from "react-router-dom";


const SideBar = ({ videos }) => {
  return (
    <aside className="sidebar">
      <p className="sidebar__caption">NEXT VIDEOS</p>
      {videos?.map((video) => (
        <div className="sidebar__thumbnails-wrapper" key={video?.id}>
          <div className="sidebar__thumbnails">
            <Link to={`/videos/${video?.id}`}>
            <img
              className="sidebar__thumbnails-img"
              src={video?.image}
              alt={video?.title}
            ></img>
            </Link>
          </div>
          <div className="sidebar__text-wrapper">
            <p className="sidebar__title">{video?.title}</p>
            <p className="sidebar__channel">{video?.channel}</p>
          </div>
        </div>
      ))}
    </aside>
  );
};

export default SideBar;
