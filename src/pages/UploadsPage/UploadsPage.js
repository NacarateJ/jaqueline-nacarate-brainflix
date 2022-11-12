import "./uploadsPage.scss";
import "../../components/header/Header";
import Image from "../../assets/images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";

const UploadsPage = () => {
  return (
    <>
      <section className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <div className="upload__wrapper">
          <div className="video">
            <p className="video__title">VIDEO THUMBNAIL</p>
            <div className="video__poster-wrapper">
              <img
                className="video__poster"
                src={Image}
                alt="View of a blue bike and it's speedometer from the top by the rider"
              ></img>
            </div>
          </div>

          <form autoComplete="off" className="form">
            <div className="form__video">
              <label className="form__video-label" htmlFor="text">
                TITLE YOUR VIDEO
              </label>
              <textarea
                className="form__video-input form__video-input--active"
                id="text"
                type="text"
                name="text"
                rows="1"
                cols="30"
                placeholder="Add tittle to your video"
              ></textarea>
            </div>

            <div className="form__description">
              <label className="form__description-label" htmlFor="text">
                ADD VIDEO DESCRIPTION
              </label>
              <textarea
                className="form__description-input form__description-input--active"
                id="text"
                type="text"
                name="text"
                rows="5"
                cols="30"
                placeholder="Add description to your video"
              ></textarea>
            </div>
          </form>
        </div>

        <div className="button">
          <div className="button__wrapper-publish">
            <Link to="/uploaded">
              <button className="button__publish" type="file">
                PUBLISH
              </button>
            </Link>
          </div>

          <div className="button__wrapper">
            <button className="button__cancel" type="button">
              CANCEL
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default UploadsPage;
