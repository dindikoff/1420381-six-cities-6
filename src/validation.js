const COMMENT_LENGTH = {
  MAX: 300,
  MIN: 50
};

const ratingValidation = (ratingNumber) => {
  if (!ratingNumber) {
    return false;
  }

  return true;
};

const commentTextValidation = (text) => {
  if (text.length < COMMENT_LENGTH.MIN) {
    return false;
  }

  if (text.length > COMMENT_LENGTH.MAX) {
    return false;
  }

  return true;
};

export const validate = {
  rating: ratingValidation,
  review: commentTextValidation,
};
