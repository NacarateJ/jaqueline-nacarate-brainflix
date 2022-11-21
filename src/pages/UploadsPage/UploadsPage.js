import "./uploadsPage.scss";
import "../../components/header/Header";
import Image from "../../assets/images/Upload-video-preview.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";

const BACK_END = process.env.REACT_APP_BACKEND_URL;

const UploadsPage = () => {
  const [videos, setVideos] = useState([]);
  const [thumbnail, setThumbnail] = useState({ Image });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !event.target.videoTitle.value ||
      !event.target.videoDescripition.value ||
      !thumbnail
    ) {
      alert(
        "Please add a thumbnail and the information required to publish it"
      );
    } else {
      const newVideo = {
        title: event.target.videoTitle.value,
        description: event.target.videoDescripition.value,
        thumbnail: thumbnail,
      };
      axios.post(`${BACK_END}/api/videos`, newVideo).then((response) => {
        setVideos(...videos, response.data);
      });
      event.target.reset();

      navigate("/upload-successful");
    }
  };

  // Get production API keys from Upload.io
  const uploader = Uploader({
    apiKey: "free",
  });

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
                src={thumbnail.Image ? thumbnail.Image : thumbnail}
                alt="View of a blue bike and it's speedometer from the top by the rider or Thumbnail uploaded by the user"
              ></img>
              <div className="button__select-mt-wrapper">
                <UploadButton
                  uploader={uploader}
                  options={{ multi: true }}
                  onComplete={(files) => {
                    if (files.length === 0) {
                      console.log("No files selected.");
                    } else {
                      setThumbnail(files[0].fileUrl);
                    }
                  }}
                >
                  {({ onClick }) => (
                    <button className="button__select-mt" onClick={onClick}>
                      SELECT YOUR THUMBNAIL
                    </button>
                  )}
                </UploadButton>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} autoComplete="off" className="form">
            <div className="form__video">
              <label className="form__video-label" htmlFor="text">
                TITLE YOUR VIDEO
              </label>
              <textarea
                className="form__video-input form__video-input--active"
                id="videoTitle"
                type="text"
                name="videoTitle"
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
                id="videoDescripition"
                type="text"
                name="videoDescripition"
                rows="5"
                cols="30"
                placeholder="Add description to your video"
              ></textarea>
            </div>

            <div className="button">
              <div className="button__wrapper-publish">
                <button className="button__publish" type="submit">
                  PUBLISH
                </button>
              </div>

              <div className="button__wrapper">
                <Link to="/">
                  <button className="button__cancel" type="button">
                    CANCEL
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UploadsPage;
