import "./comments.scss";
import Image from "../../assets/images/Mohan-muruge.jpg";
import { formatDistance } from "date-fns";

const Comments = ({ comments }) => {
  return (
    <section className="comments">
      <p className="comments__number">{comments.length} Comments</p>
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

      {comments.map((comment) => (
        <div className="comments__fans-wrapper" key={comment.id}>
          <div className="comments__fans">
            <div className="comments__avatar"></div>
            <div className="comments__info">
              <div className="comments__info-wrapper">
                <p className="comments__info-name">{comment.name}</p>
                <p className="comments__info-timestamp">
                  {formatDistance(
                    new Date(comment.timestamp),
                    new Date(),
                    {
                      addSuffix: true,
                    }
                  )}
                </p>
              </div>
              <p className="comments__info-text">{comment.comment}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Comments;
