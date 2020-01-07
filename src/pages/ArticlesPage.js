import React from 'react';
import { Link } from 'react-router-dom';

import articles from '../content/articles';

const ArticlesPage = () => {
  const getArticle = ({name, title, content}, key) => (
    <Link className='article-list-item' key={key} to={`/articles/${name}`}>
      <h3>{title}</h3>
      <p>{content[0].substring(0, 150)}</p>
    </Link>
  )

  const getArticles = (list) => list.map(getArticle);

  return (
    <>
      <h1>Articles Page</h1>
      {getArticles(articles)}
    </>
  )
};

export default ArticlesPage;
