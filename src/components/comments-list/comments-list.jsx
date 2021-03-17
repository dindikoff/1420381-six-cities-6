import React from 'react';
import PropTypes from 'prop-types';
import Comment, {CommentType} from '../comment/comment';
import CommentForm from "../comment-form/comment-form";
import {useSelector} from 'react-redux';
import {AuthorizationStatus} from '../../const';

const CommentsList = ({comments}) => {

  const {authorizationStatus} = useSelector((state) => state.USER);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((comment) => <Comment comment={comment} key={comment.id} />)}
      </ul>
      {authorizationStatus !== AuthorizationStatus.AUTH ? `` : <CommentForm />}
    </section>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(CommentType).isRequired,
};

export default CommentsList;
