import React from 'react'
import { useParams } from 'react-router-dom';

import articles from '../content/articles';

const ArticlePage = () => {
  const { name } = useParams();
  const article = articles.find(article => article.name === name);

  if(!article) return <h1>Article does not exist!</h1>

  const getParagraph = (paragraph, key) => <p key={key}>{paragraph}</p>;
  const getContent = (content) => content.map(getParagraph);

  return (
    <>
      <h1>{article.title}</h1>
      {getContent(article.content)}
    </>
  )
};

export default ArticlePage;
