import React from 'react'
import { useParams } from 'react-router-dom';

import ArticlesList from '../components/ArticlesList';

import articles from '../content/articles';
import NotFoundPage from './NotFoundPage';

const ArticlePage = () => {
  const { name } = useParams();
  const article = articles.find(article => article.name === name);

  if(!article) return <NotFoundPage/>

  const getParagraph = (paragraph, key) => <p key={key}>{paragraph}</p>;
  const getContent = (content) => content.map(getParagraph);

  const relatedArticles = articles.filter(article => article.name !== name);

  return (
    <>
      <h1>{article.title}</h1>
      {getContent(article.content)}
      <h3>Related articles: </h3>
      <ArticlesList articles={relatedArticles}/>
    </>
  )
};

export default ArticlePage;
