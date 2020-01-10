const express = require('express');

const PORT = 8000;

const app = express();

app.get('/hello', (req, res) => res.send('Hello!'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));