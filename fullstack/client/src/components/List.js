import React from 'react'

const List = ({ heading, items, handler }) => {
  const getElements = (list) => list.map(handler);

  return (
    <>
      <h3>{heading}: </h3>
      {getElements(items)}
    </>
  )
}

export default List;
