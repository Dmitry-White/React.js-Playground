import React from 'react';

import ArticlesList from '../components/ArticlesList';

import articles from '../content/articles';

const ArticlesPage = () => (
  <>
    <h1>Articles Page</h1>
    <ArticlesList articles={articles} />
  </>
);

export default ArticlesPage;
