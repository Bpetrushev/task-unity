import express from 'express';
const app = express();
const port: any = 3000;

app.get('/', (_req, res) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}!`);
});
