import React from 'react';
import PropTypes from 'prop-types';
import Comment, {CommentType} from '../comment/comment';
import CommentForm from "../comment-form/comment-form";
import {useSelector} from 'react-redux';
import {AuthorizationStatus} from '../../const';
import * as dayjs from 'dayjs';

const CommentsList = ({comments, id}) => {

  const {authorizationStatus} = useSelector((state) => state.USER);

  const commentsByNewest = comments.slice().sort((a, b) => (dayjs(b.date).isAfter(dayjs(a.date)) ? 1 : -1));

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {commentsByNewest.slice(0, 10).map((comment) => <Comment comment={comment} key={comment.id} />)}
      </ul>
      {authorizationStatus !== AuthorizationStatus.AUTH ? `` : <CommentForm id={id}/>}
    </section>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(CommentType).isRequired,
  id: PropTypes.number.isRequired
};

export default CommentsList;
