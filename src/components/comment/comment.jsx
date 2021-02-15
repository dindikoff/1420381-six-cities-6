import React from 'react';
import PropTypes from 'prop-types';
import {RATING_STAR_PERCENT} from '../../const';
import * as dayjs from 'dayjs';

const Comment = ({comment}) => {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatar} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {comment.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: comment.rating * RATING_STAR_PERCENT + `%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.text}
        </p>
        <time className="reviews__time" dateTime={dayjs(comment.date).format(`YYYY-MM-DD`)}>{dayjs(comment.date).format(`MMM YYYY`)}</time>
      </div>
    </li>
  );
};

export const CommentType = PropTypes.exact({
  text: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  })
});

Comment.propTypes = {
  comment: CommentType.isRequired,
};

export default Comment;
