import "./comments.scss";
import Views from "../../assets/icons/views.svg";
import Likes from "../../assets/icons/likes.svg";
import Image from "../../assets/images/Mohan-muruge.jpg";
import { formatDistance } from "date-fns";
import axios from "axios";

const BACK_END = process.env.REACT_APP_BACKEND_URL;

const Comments = ({ video, setVideoDetails }) => {
  const { title, channel, description, views, likes, timestamp, comments } =
    video;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!event.target.comments.value) {
      alert("Please add new comment");
    } else {
      const newComments = {
        comment: event.target.comments.value,
      };
      axios
        .post(`${BACK_END}/api/videos/${video.id}/comments`, newComments)
        .then((response) => {
          setVideoDetails(response.data);
        });
      event.target.reset();
    }
  };

  return (
    <div className="video__information-container">
      <section className="video__details">
        <h1 className="video__details-caption">{title}</h1>
        <div className="video__details-wrapper">
          <div className="video__details-left">
            <p className="video__details-channel">{channel}</p>
            {timestamp && (
              <p className="video__details-timestamp">
                {formatDistance(new Date(timestamp), new Date(), {
                  addSuffix: true,
                })}
              </p>
            )}
          </div>

          <div className="video__details-right">
            <div className="video__details-container">
              <img
                className="video__details-icon"
                src={Views}
                alt="gray eye icon"
              ></img>
              <p className="video__details-numbers">{views}</p>
            </div>

            <div className="video__details-container">
              <img
                className="video__details-icon"
                src={Likes}
                alt="gray heart icon"
              ></img>
              <p className="video__details-numbers">{likes}</p>
            </div>
          </div>
        </div>

        <div className="video__details-description">
          <p>{description}</p>
        </div>
      </section>

      <section className="comments">
        <p className="comments__number">{comments?.length} Comments</p>
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="comments__form"
        >
          <div>
            <img
              className="comments__img"
              src={Image}
              alt="Mohan Muruge profile facing left"
            />
          </div>

          <div className="comments__form-wrapper">
            <div className="comments__form-comment">
              <label className="comments__form-label" htmlFor="comments">
                JOIN THE CONVERSATION
              </label>
              <textarea
                className="comments__form-input comments__form-input--active"
                id="comments"
                type="text"
                name="comments"
                rows="5"
                cols="30"
                placeholder="Add a new comment"
              ></textarea>
              <small></small>
            </div>

            <button className="comments__button-submit" type="submit">
              COMMENT
            </button>
          </div>
        </form>

        {comments?.map((comment) => (
          <div className="comments__fans-wrapper" key={comment?.id}>
            <div className="comments__fans">
              <div className="comments__avatar"></div>
              <div className="comments__info">
                <div className="comments__info-wrapper">
                  <p className="comments__info-name">{comment?.name}</p>
                  {comment?.timestamp && (
                    <p className="comments__info-timestamp">
                      {formatDistance(
                        new Date(comment?.timestamp),
                        new Date(),
                        {
                          addSuffix: true,
                        }
                      )}
                    </p>
                  )}
                </div>
                <p className="comments__info-text">{comment?.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Comments;
