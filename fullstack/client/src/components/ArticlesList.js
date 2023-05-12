import React from 'react';
import { Link } from 'react-router-dom';

import List from './List';

const ArticlesList = ({ articles }) => {
  const getArticle = ({ name, title, content }, key) => (
    <Link className='article-list-item' key={key} to={`/articles/${name}`}>
      <h3>{title}</h3>
      <p>{content[0].substring(0, 150)}</p>
    </Link>
  );

  return <List heading='Related articles' items={articles} handler={getArticle} />
}

export default ArticlesList
