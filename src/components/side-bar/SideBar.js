import "./sideBar.scss";

const SideBar = ({ videos, onClick }) => {
  // let sideVideos = props.videos;
  // let clickedVideos = props.onClick;
  return (
    <aside className="sidebar">
      <p className="sidebar__caption">NEXT VIDEO</p>
      {videos.map((video) => (
        <div className="sidebar__thumbnails-wrapper" key={video.id}>
          <div className="sidebar__thumbnails">
            <img
              className="sidebar__thumbnails-img"
              src={video.image}
              alt="#"
              onClick={(clickEvent) => onClick(clickEvent, video.id)}
            ></img>
          </div>
          <div className="sidebar__text-wrapper">
            <h2 className="sidebar__title">{video.title}</h2>
            <p className="sidebar__channel">{video.channel}</p>
          </div>
        </div>
      ))}
    </aside>
  );
};

export default SideBar;
