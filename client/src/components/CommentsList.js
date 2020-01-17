import React from 'react';

const CommentsList = ({ comments }) => {
  const getComment = ({ username, text }, key) => (
    <div className="comment" key={key}>
      <h4>{username}</h4>
      <p>{text}</p>
    </div>
  )

  const getComments = (list) => list.map(getComment);

  return (
    <>
      <h3>Comments: </h3>
      {comments.length ? getComments(comments) : <h4>No comments for this article.</h4>}
    </>
  )
}

export default CommentsList
