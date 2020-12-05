import express from 'express';
const app = express();
import nunjucks from 'nunjucks';

const port = 3000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

nunjucks.configure('src/views', {
  express: app,
  noCache: true,
});

app.get('/', (req, res) => {
  return res.render('index.html');
});

app.listen(port, () => console.log(`app running on localhost:${port}`));
