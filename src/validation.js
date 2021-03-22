const COMMENT_LENGTH = {
  MAX: 300,
  MIN: 50
};

const ratingValidation = (ratingNumber) => {
  if (ratingNumber <= 0) {
    return `Rating is required`;
  }

  return null;
};

const commentTextValidation = (text) => {
  if (text.length < COMMENT_LENGTH.MIN) {
    return `Comment must be greater than 50`;
  }

  if (text.length > COMMENT_LENGTH.MAX) {
    return `Comment must be greater than 500`;
  }

  return null;
};

export const validate = {
  rating: ratingValidation,
  review: commentTextValidation,
};
