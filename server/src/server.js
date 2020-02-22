const express = require('express');
const bodyParser = require('body-parser');

const articlesInfo = require('./articlesInfo');

const PORT = 8000;

const app = express();

app.use(bodyParser.json());

app.get('/api/articles/:name', (req, res) => {
  const articleName = req.params.name;

  const article = articlesInfo[articleName];

  res.status(200).json(article);
});

app.post('/api/articles/:name/upvote', (req, res) => {
  const articleName = req.params.name;

  const article = articlesInfo[articleName];

  article.upvotes += 1;

  res.status(200).send(`${articleName} now has ${article.upvotes} upvotes!`);
});

app.post('/api/articles/:name/comment', (req, res) => {
  const articleName = req.params.name;

  const article = articlesInfo[articleName];

  const { username, text } = req.body;

  article.comments.push({ username, text });

  res.status(200).send(article);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));