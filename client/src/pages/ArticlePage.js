import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import ArticlesList from '../components/ArticlesList';

import articles from '../content/articles';
import NotFoundPage from './NotFoundPage';

const defaultState = {
  upvotes: 0,
};

const ArticlePage = () => {
  const { name } = useParams();

  const article = articles.find(article => article.name === name);
  const relatedArticles = articles.filter(article => article.name !== name);

  const [articleInfo, setArticleInfo] = useState(defaultState);
  useEffect(() => {
    setArticleInfo({
      upvotes: Math.ceil(Math.random() * 10)
    });
  }, [name]);

  if (!article) return <NotFoundPage />

  const getUpvotes = () => <p>This article has been upvoted {articleInfo.upvotes} times.</p>;
  const getParagraph = (paragraph, key) => <p key={key}>{paragraph}</p>;
  const getContent = (content) => content.map(getParagraph);

  return (
    <>
      <h1>{article.title}</h1>
      {getUpvotes()}
      {getContent(article.content)}
      <h3>Related articles: </h3>
      <ArticlesList articles={relatedArticles} />
    </>
  )
};

export default ArticlePage;
