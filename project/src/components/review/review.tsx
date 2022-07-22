import { Comment } from '../../types/offer';
import { createRating } from '../../utils/utils';

function Review({commentInfo:{comment, date, rating, user}}: {commentInfo: Comment}): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: createRating(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={(new Date(date).toDateString())}>{(new Date(date).toLocaleString('en-US', {month: 'long', year: 'numeric'}))}</time>
      </div>
    </li>
  );
}

export default Review;
