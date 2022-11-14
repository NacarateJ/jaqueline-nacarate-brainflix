import "./heroVideo.scss";
import React from "react";


const HeroVideo = ({ video }) => {
return (
    Object.keys(video).length > 0 && (
      <main className="hero">
        <section className="hero__video-wrapper">
          <video
            className="hero__video"
            poster={video.image}
            controls
          ></video>
        </section>
      </main>
    )
  );
};

export default HeroVideo;
