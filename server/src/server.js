const express = require('express');
const bodyParser = require('body-parser');

const articlesInfo = require('./articlesInfo');

const PORT = 8000;

const app = express();

app.use(bodyParser.json());

app.post('/api/articles/:name/upvote', (req, res) => {
  const articleName = req.params.name;

  const article = articlesInfo[articleName];

  article.upvotes += 1;

  res.status(200).send(`${articleName} now has ${article.upvotes} upvotes!`);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));