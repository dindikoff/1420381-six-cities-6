import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {sendComment} from '../../store/api-actions';
import {validate} from '../../validation';

import './shake.css';

const CommentForm = ({id}) => {

  const STARS_COUNT = 5;
  const RATING_TITLE = [`terribly`, `badly`, `not bad`, `good`, `perfect`];

  const [values, setValues] = useState({
    rating: 0,
    review: ``
  });

  const [isValid, setValidation] = useState({
    rating: false,
    review: false
  });

  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const {name, value} = evt.target;

    setValues({
      ...values,
      [name]: value
    });

    setValidation({
      ...isValid,
      [name]: validate[name](value)
    });
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    setError(false);

    if (isValid.review && isValid.rating) {
      dispatch(sendComment({
        id,
        rating: values.rating,
        comment: values.review,
      }))
      .then(() => {
        setValues({rating: null, review: ``});
      })
      .catch(() => {
        setError(true);
      });
    }
  };

  return (
    <form className={`reviews__form form ${error ? `form--error` : ``}`} action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {new Array(STARS_COUNT).fill().map((_, i) => {
          return (
            <React.Fragment key={i}>
              <input onChange={handleChange} checked={parseInt(values.rating, 10) === i + 1} className="form__rating-input visually-hidden"
                name="rating" value={i + 1} id={`${i + 1}-stars`} type="radio"/>
              <label htmlFor={`${i + 1}-stars`} className="reviews__rating-label form__rating-label" title={RATING_TITLE[i]}>
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </React.Fragment>
          );
        }).reverse()}
      </div>

      <textarea maxLength={300} minLength={50} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleChange} value={values.review}/>
      <div>
      </div>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isValid.rating && isValid.review ? false : true}>Submit</button>
      </div>
    </form>
  );
};

CommentForm.propTypes = {
  id: PropTypes.number.isRequired
};

export default CommentForm;
