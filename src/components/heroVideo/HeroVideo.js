import "./heroVideo.scss";

const HeroVideo = ({ video }) => {
//   const {
//     title,
//     channel,
//     image,
//     description,
//     views,
//     likes,
//     duration,
//     video,
//     timestamp,
//     comments,
//     ...rest
//   } = video;

  return (
    <main className="hero">
      <section className="hero__video-wrapper">
        <video className="hero__video" src={video.image} poster="#"></video>

        <div className="hero__video-icons-wrapper">
          <img className="hero__video-icon-play" src="#" alt="#"></img>
          <img className="hero__video-icon-scrub" src="#" alt="#"></img>
          <img className="hero__video-icon-fullscreen" src="#" alt="#"></img>
          <img className="hero__video-icon-volumeup" src="#" alt="#"></img>
        </div>
      </section>

      <section className="hero__information-wrapper">
        <h1 className="hero__information-caption"></h1>

        <div className="hero__information-left">
          <p className="hero__information-channel"></p>
          <p className="hero__information-timestamp"></p>
        </div>

        <div className="hero__information-right">
          <img className="hero__information-views" src="#" alt="#"></img>
          <p className="hero__information-views-number"></p>

          <img className="hero__information-likes" src="#" alt="#"></img>
          <p className="hero__information-likes-number"></p>
        </div>

        <div className="hero__information-description">
          <p></p>
        </div>
      </section>
    </main>
  );
};

export default HeroVideo;
