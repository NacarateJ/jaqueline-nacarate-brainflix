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
    </main>
  );
};

export default HeroVideo;
