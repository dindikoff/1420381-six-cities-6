import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {sendComment} from '../../store/api-actions';
import {validate} from '../../validation';

import '../../shake.css';

const CommentForm = ({id}) => {
  const [values, setValues] = useState({
    rating: 0,
    review: ``
  });
  const [errors, setErrors] = useState({});
  const [isServerError, setServerError] = useState(false);
  const [touched, setTouched] = useState({
    rating: false,
    review: false
  });
  const [formDisabledStatus, setFormDisabledStatus] = useState(true);

  const dispatch = useDispatch();

  const resetStates = () => {
    setValues({
      rating: 0,
      review: ``
    });
    setErrors({});
    setTouched({
      rating: false,
      review: false
    });
    setFormDisabledStatus(true);
  };

  const validateForm = () => {
    const formValidation = Object.keys(values).reduce(
        (acc, key) => {
          const newError = validate[key](values[key]);
          const newTouched = {[key]: true};
          return {
            errors: {
              ...acc.errors,
              ...(newError && {[key]: newError}),
            },
            touched: {
              ...acc.touched,
              ...newTouched,
            },
          };
        },
        {
          errors: {...errors},
          touched: {...touched},
        },
    );
    setErrors(formValidation.errors);
    setTouched(formValidation.touched);
    setServerError(false);
  };

  const isFormValid = () => {
    if (
      !Object.values(errors).length &&
      Object.values(touched).length ===
        Object.values(values).length &&
      Object.values(touched).every((fieldTouched) => {
        return fieldTouched === true;
      })
    ) {
      return true;
    }

    return false;
  };

  const handleChange = (evt) => {
    const {name, value: newValue} = evt.target;
    const error = validate[name](newValue);

    setValues({
      ...values,
      [name]: newValue,
    });

    setTouched({
      ...touched,
      [name]: true,
    });

    setErrors({
      ...(error && {[name]: touched[name] && error}),
    });

    if (isFormValid()) {
      setFormDisabledStatus(false);
    } else {
      setFormDisabledStatus(true);
    }
  };

  const handleOnSubmitForm = (evt) => {
    evt.preventDefault();
    evt.persist();

    validateForm();

    if (isFormValid()) {
      dispatch(sendComment({
        id,
        rating: values.rating,
        comment: values.review,
      }))
      .then(() => {
        resetStates();
        evt.target.reset();
      })
      .catch(() => {
        setServerError(true);
      });
    }
  };

  return (
    <form className={`reviews__form form ${isServerError ? `formError` : ``}`} action="#" method="post" onSubmit={handleOnSubmitForm} onChange={handleChange}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden"
          name="rating" defaultValue={5} id="5-stars" type="radio"/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={4} id="4-stars" type="radio" />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={3} id="3-stars" type="radio" />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={2} id="2-stars" type="radio" />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={1} id="1-star" type="radio" />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>

      <textarea maxLength={300} minLength={50} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={``}/>
      <div>
        <p color="red">
          {errors.rating || isServerError ? `CHECK YOUR INTERNET CONNECTION` : ``}
        </p>
      </div>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={formDisabledStatus}>Submit</button>
      </div>
    </form>
  );
};

CommentForm.propTypes = {
  id: PropTypes.number.isRequired
};

export default CommentForm;
