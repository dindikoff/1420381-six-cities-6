import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Comment, {CommentType} from '../comment/comment';
import CommentForm from "../comment-form/comment-form";
import {AuthorizationStatus} from '../../const';

const CommentsList = ({comments, isAuthorized}) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((comment) => <Comment comment={comment} key={comment.id} />)}
      </ul>
      {isAuthorized !== AuthorizationStatus.AUTH ? `` : <CommentForm />}
    </section>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(CommentType).isRequired,
  isAuthorized: PropTypes.oneOf([`AUTH`, `NO_AUTH`])
};

const mapStateToProps = (state) => ({
  isAuthorized: state.authorizationStatus
});

export {CommentsList};
export default connect(mapStateToProps)(CommentsList);
