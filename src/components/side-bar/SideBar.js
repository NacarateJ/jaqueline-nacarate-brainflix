import "./sideBar.scss";

const SideBar = (props) => {
  let sideVideos = props.videos;
  return (
    <aside className="sidebar">
      {sideVideos.map((video) => (
        <>
          <p className="sidebar__caption">Next VIDEO</p>

          <div className="sidebar__cards" key={video.id}>
            <img src={video.image} alt="#"></img>
          </div>

          <div className="sidebar__text-wrapper">
            <h2 className="sidebar__title"></h2>
            <p className="sidebar__channel"></p>
          </div>
        </>
      ))}
    </aside>
  );
};

export default SideBar;
