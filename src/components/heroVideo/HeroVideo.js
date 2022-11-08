import "./heroVideo.scss";
import { formatDistance } from "date-fns";

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
        <video
          className="hero__video"
          src={video.image}
          poster={image}
          controls
        ></video>
      </section>

      {/* <section className="hero__information">
        <h1 className="hero__information-caption">{title}</h1>

        <div className="hero__information-wrapper">
          <div className="hero__information-left">
            <p className="hero__information-channel"> By {channel}</p>
            <p className="hero__information-timestamp">
              {formatDistance(new Date(timestamp), new Date(), {
                addSuffix: true,
              })}
            </p>
          </div>

          <div className="hero__information-right">
            <div className="hero__information-container">
              <img
                className="hero__information-icon"
                src={Views}
                alt="gray eye icon"
              ></img>
              <p className="hero__information-numbers">{views}</p>
            </div>

            <div className="hero__information-container">
              <img
                className="hero__information-icon"
                src={Likes}
                alt="gray heart icon"
              ></img>
              <p className="hero__information-numbers">{likes}</p>
            </div>
          </div>
        </div>

        <div className="hero__information-description">
          <p>{description}</p>
        </div>
      </section> */}
    </main>
  );
};

export default HeroVideo;
