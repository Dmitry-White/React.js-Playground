import React from 'react';

import List from './List';

const CommentsList = ({ comments }) => {
  const getComment = ({ username, text }, key) => (
    <div className="comment" key={key}>
      <h4>{username}</h4>
      <p>{text}</p>
    </div>
  );

  return <List heading='Comments' items={comments} handler={getComment} />
}

export default CommentsList
