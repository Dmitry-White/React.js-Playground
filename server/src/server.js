const express = require('express');
const bodyParser = require('body-parser');

const PORT = 8000;

const app = express();

app.use(bodyParser.json());

app.get('/hello', (req, res) => res.send('Hello!'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));