import "./uploads.scss";
import "../../Components/header/Header";
import Header from "../../Components/header/Header";
import Image from "../../assets/images/Upload-video-preview.jpg";

const Uploads = () => {
  return (
    <>
      <Header />

      <section className="upload">
        <div className="upload__title">Upload Video</div>
        <div className="upload__wrapper">
          <div className="video__wrapper">
            <p className="video__title">VIDEO THUMBNAIL</p>
            <video
              className="upload__video"
              src={Image}
              poster="#"
              controls
            ></video>
          </div>

          <form autoComplete="off" className="form__wraper">
            <div className="form__vide">
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
                rows="1"
                cols="30"
                placeholder="Add description to your video"
              ></textarea>
            </div>

            <div className="button">
              <div class="button__Wrapper">
                <button className="button__publish" type="file">
                  PUBLISH
                </button>
              </div>
              <div class="button__Wrapper">
                <button className="button__cancel" type="button">
                  CANCEL
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Uploads;
