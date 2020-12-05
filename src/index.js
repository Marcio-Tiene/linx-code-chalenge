const express = require('express');
const app = express();

const port = 3000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: app,
  noCache: true,
});

app.get('/', (req, res) => {
  return res.render('index.html');
});

app.listen(port, () => console.log(`app running on localhost:${port}`));
