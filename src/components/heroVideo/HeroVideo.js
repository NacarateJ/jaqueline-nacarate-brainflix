import "./heroVideo.scss";
import Play from "../../assets/icons/play.svg";
import Scrub from "../../assets/icons/scrub.svg";
import Fullscreen from "../../assets/icons/fullscreen.svg";
import Volumeup from "../../assets/icons/volume_up.svg";
import Views from "../../assets/icons/views.svg";
import Likes from "../../assets/icons/likes.svg";

const HeroVideo = ({ video }) => {
  const {
    title,
    channel,
    image,
    description,
    views,
    likes,
    duration,
    timestamp,
    ...rest
  } = video;

  return (
    <main className="hero">
      <section className="hero__video-wrapper">
        <video className="hero__video" src={video.image} poster={image}></video>

        <div className="hero__video-icons-wrapper">
          <img className="hero__video-icon-play" src={Play} alt="#"></img>
          <img className="hero__video-icon-scrub" src={Scrub} alt="#"></img>
          <p className="hero__videeo-duration">{duration}</p>
          <img
            className="hero__video-icon-fullscreen"
            src={Fullscreen}
            alt="#"
          ></img>
          <img
            className="hero__video-icon-volumeup"
            src={Volumeup}
            alt="#"
          ></img>
        </div>
      </section>

      <section className="hero__information-wrapper">
        <h1 className="hero__information-caption">{title}</h1>

        <div className="hero__information-left">
          <p className="hero__information-channel">{channel}</p>
          <p className="hero__information-timestamp">{timestamp}</p>
        </div>

        <div className="hero__information-right">
          <img
            className="hero__information-views-icon"
            src={Views}
            alt="#"
          ></img>
          <p className="hero__information-views-number">{views}</p>

          <img
            className="hero__information-likes-icon"
            src={Likes}
            alt="#"
          ></img>
          <p className="hero__information-likes-number">{likes}</p>
        </div>

        <div className="hero__information-description">
          <p>{description}</p>
        </div>
      </section>
    </main>
  );
};

export default HeroVideo;
