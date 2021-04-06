import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {sendComment} from '../../store/api-actions';
import {validate} from '../../validation';

import './comment-form.css';

const CommentForm = ({id}) => {

  const STARS_COUNT = 5;
  const StarList = [...Array(STARS_COUNT + 1).keys()].slice(1);
  const RatingTitles = [`terribly`, `badly`, `not bad`, `good`, `perfect`];

  const [values, setValues] = useState({
    rating: undefined,
    review: ``
  });

  const [hasServerError, setHasServerError] = useState(false);

  const isRatingValid = validate.rating(values.rating);
  const isReviewValid = validate.review(values.review);
  const isFormValid = isRatingValid && isReviewValid;

  const dispatch = useDispatch();

  const handleRatingChange = (evt) => {
    setValues({
      ...values,
      rating: parseInt(evt.target.value, 10)
    });
  };

  const handleReviewChange = (evt) => {
    setValues({
      ...values,
      review: evt.target.value
    });
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    setHasServerError(false);

    if (isFormValid) {
      dispatch(sendComment({
        id,
        rating: values.rating,
        comment: values.review,
      }))
      .then(() => {
        setValues({rating: undefined, review: ``});
      })
      .catch(() => {
        setHasServerError(true);
      });
    }
  };

  return (
    <form className={`reviews__form form ${hasServerError ? `form--error` : ``}`} action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {StarList.map((starValue) => {
          const starId = `${starValue}-stars`;
          return (
            <React.Fragment key={starId}>
              <input onChange={handleRatingChange} checked={values.rating === starValue} className="form__rating-input visually-hidden"
                name="rating" value={starValue} id={starId} type="radio"/>
              <label htmlFor={starId} className="reviews__rating-label form__rating-label" title={RatingTitles[starValue - 1]}>
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </React.Fragment>
          );
        }).reverse()}
      </div>

      <textarea maxLength={300} minLength={50} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleReviewChange} value={values.review}/>
      {hasServerError && <div>Something went wrong =(</div>}
      <div>
      </div>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isFormValid ? false : true}>Submit</button>
      </div>
    </form>
  );
};

CommentForm.propTypes = {
  id: PropTypes.number.isRequired
};

export default CommentForm;
