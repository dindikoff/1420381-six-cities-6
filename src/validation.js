const COMMENT_LENGTH = {
  MAX: 300,
  MIN: 50
};

const ratingValidation = (ratingNumber) => Boolean(ratingNumber);

const commentTextValidation = (text) => {
  return text.length >= COMMENT_LENGTH.MIN && text.length <= COMMENT_LENGTH.MAX;
};

export const validate = {
  rating: ratingValidation,
  review: commentTextValidation,
};
