import "./header.scss";
import Logo from "../../assets/logo/BrainFlix.svg";
import Image from "../../assets/images/Mohan-muruge.jpg";

const Header = () => {
  // console.log(props);
  return (
    <header className="header">
      <div className="header__navigation-left">
        <a href="/" className="header__company-name">
          <img
            className="header__company-logo"
            src={Logo}
            alt="Play button on a blue backgorund and BrainFlix word to the right"
          ></img>
        </a>
      </div>

      <nav className="header__navigation-right">
        <div className="header__navigation-right-wrapper">
          <input className="header__search" type="search" placeholder="Search"></input>
          <div className="header__avatar-container">
            <img
              className="header__avatar"
              src={Image}
              alt="Mohan Muruge profile facing left"
            ></img>
          </div>
        </div>

        <button className="header__button" type="text">
          UPLOAD
        </button>
      </nav>
    </header>
  );
};

export default Header;
