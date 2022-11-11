import "./comments.scss";
import Views from "../../assets/icons/views.svg";
import Likes from "../../assets/icons/likes.svg";
import Image from "../../assets/images/Mohan-muruge.jpg";
import { formatDistance } from "date-fns";


const Comments = ({ video }) => {
  const { title, channel, description, views, likes, timestamp, comments } =
    video;

  return (
    <div className="hero__container">
      <section className="hero__information">
        <h1 className="hero__information-caption">{title}</h1>

        <div className="hero__information-wrapper">
          <div className="hero__information-left">
            <p className="hero__information-channel">{channel}</p>
            <p className="hero__information-timestamp">{timestamp}
              {/* {formatDistance(new Date(timestamp), new Date(), {
                addSuffix: true,
              })} */}
            </p>
          </div>

          <div className="hero__information-right">
            <div className="hero__information-container">
              <img
                className="hero__information-icon"
                src={Views}
                alt="gray eye icon"
              ></img>
              <p className="hero__information-numbers">{views}</p>
            </div>

            <div className="hero__information-container">
              <img
                className="hero__information-icon"
                src={Likes}
                alt="gray heart icon"
              ></img>
              <p className="hero__information-numbers">{likes}</p>
            </div>
          </div>
        </div>

        <div className="hero__information-description">
          <p>{description}</p>
        </div>
      </section>

      <section className="comments">
        <p className="comments__number">{comments?.length} Comments</p>
        <form autoComplete="off" className="comments__form">
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

            <div className="comments__button-wrapper">
              <button className="comments__button-submit" type="submit">
                COMMENT
              </button>
            </div>
          </div>
        </form>

        {comments?.map((comment) => (
          <div className="comments__fans-wrapper" key={comment?.id}>
            <div className="comments__fans">
              <div className="comments__avatar"></div>
              <div className="comments__info">
                <div className="comments__info-wrapper">
                  <p className="comments__info-name">{comment?.name}</p>
                  <p className="comments__info-timestamp">
                    {formatDistance(new Date(comment?.timestamp), new Date(), {
                      addSuffix: true,
                    })}
                  </p>
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
