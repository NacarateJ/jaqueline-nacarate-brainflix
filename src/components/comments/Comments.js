import "./comments.scss";
import Image from "../../assets/images/Mohan-muruge.jpg";

const Comments = ({ comments }) => {
  return (
    <section className="hero__comments-wrapper">
      <p className="hero__comments-number"></p>

      <form autoComplete="off" className="hero__comments-form">
        <div>
          <img
            className="hero__comments-img"
            src={Image}
            alt="Mohan Muruge profile facing left"
          />
        </div>

        <div className="hero__comments-form-wrapper">
          <div className="hero__comments-form-comment">
            <label className="hero__comments-form-label" htmlFor="comment">
              JOIN THE CONVERSATION
            </label>
            <textarea
              className="hero__comments-form-input hero__comments-form-input--active"
              id="comment"
              type="text"
              name="comment"
              rows="5"
              cols="30"
              placeholder="Add a new comment"
            ></textarea>
            <small></small>
          </div>

          <div className="hero__comments-button">
            <button className="hero__comments-button-submit" type="submit">
              COMMENT
            </button>
          </div>
        </div>
      </form>

      {comments.length > 2 ? (
        <section className="hero__comments-fans-wrapper">
          <div className="hero__comments-fans">
            <div className="hero__comments-avatar"></div>
            <div className="hero__comments-info">
              {relatives.map((comment) => (
                <div className="hero__comments-info-wrapper">
                  <p
                    className="hero__comments-info-name"
                    key={comment.name}
                  ></p>
                  <p className="hero__comments-info-timestamp">
                    {comment.timestamp}
                  </p>
                  <div>
                    <p className="hero__comments-info-text">
                      {comment.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="hero__comments-info">
          <p className="relatives__no-data">No Relatives</p>
        </section>
      )}

      {/* <div className="hero__comments-fans-wrapper">
        <div className="hero__comments-fans">
          <div className="hero__comments-avatar"></div>
          <div className="hero__comments-info">
            <div className="hero__comments-info-wrapper">
              <p className="hero__comments-info-name"></p>
              <p className="hero__comments-info-timestamp"></p>
            </div>
            <p className="hero__comments-info-text"></p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Comments;
