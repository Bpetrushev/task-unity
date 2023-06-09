import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}!`);
});
