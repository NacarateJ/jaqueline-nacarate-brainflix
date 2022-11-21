import "./mainVideo.scss";
import React from "react";

const MainVideo = ({ video }) => {
  return (
    Object.keys(video).length > 0 && (
      <main className="main">
        <section className="main__video-wrapper">
          <video className="main__video" poster={video.image} controls></video>
        </section>
      </main>
    )
  );
};

export default MainVideo;
