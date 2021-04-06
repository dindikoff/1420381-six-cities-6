const COMMENT_LENGTH = {
  MAX: 300,
  MIN: 50
};

const checkRatingValidation = (ratingNumber) => Boolean(ratingNumber);

const checkCommentTextValidation = (text) => {
  return text.length >= COMMENT_LENGTH.MIN && text.length <= COMMENT_LENGTH.MAX;
};

export const validate = {
  rating: checkRatingValidation,
  review: checkCommentTextValidation,
};
