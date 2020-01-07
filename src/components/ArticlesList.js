import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => {
  const getArticle = ({ name, title, content }, key) => (
    <Link className='article-list-item' key={key} to={`/articles/${name}`}>
      <h3>{title}</h3>
      <p>{content[0].substring(0, 150)}</p>
    </Link>
  )

  const getArticles = (list) => list.map(getArticle);

  return (
    <>
      {getArticles(articles)}
    </>
  )
}

export default ArticlesList
