import React, { useState } from 'react'

const CommentForm = ({ name, fetchData }) => {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  const clickHandler = () => fetchData(`/api/articles/${name}/comment`, () => { }, {
    method: 'post',
    body: JSON.stringify({ username, text: comment }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return (
    <div id="add-comment-form">
      <h3>Add a comment</h3>
      <label htmlFor="name-input">
        Name:
        <input
          type="text"
          name="name-input"
          id="name-input"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label htmlFor="comment-input">
        Comment:
        <textarea
          name="comment-input"
          id="comment-input"
          cols="50"
          rows="4"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
      </label>
      <button onClick={clickHandler}>Add Comment</button>
    </div>
  )
}

export default CommentForm
