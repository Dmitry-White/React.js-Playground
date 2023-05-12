import React from 'react'

const UpvotesSections = ({ name, upvotes, fetchData, stateHandler }) => {
  const clickHandler = () => fetchData(`/api/articles/${name}/upvote`, stateHandler, { method: 'post' });
  return (
    <div id="upvotes-section">
      <button onClick={clickHandler}>Add Upvote</button>
      <p>This article has been upvoted {upvotes} times.</p>
    </div>
  )
}

export default UpvotesSections
