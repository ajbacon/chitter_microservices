const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());
app.use(cors());

commentsByPostId = {};

// test route to get all comments
app.get('/comments', (req, res) => {
  res.send(commentsByPostId);
});

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id]);
});

app.post('/posts/:id/comments', (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { content } = req.body;
  let comments = commentsByPostId[req.params.id] || [];

  comments.push({ id, content });

  commentsByPostId[req.params.id] = comments;

  res.status(201).send(comments);
});

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
