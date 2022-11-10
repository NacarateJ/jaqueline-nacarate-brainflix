import "./home.scss";
import HeroVideo from "../../Components/heroVideo/HeroVideo";
import Comments from "../../Components/comments/Comments";
import SideBar from "../../Components/side-bar/SideBar";

const Home = () => {
  return (
    <section className="app">
      <HeroVideo />
      <section className="app__container">
        <Comments />
         <SideBar />
      </section>
    </section>
  );
};

export default Home;
