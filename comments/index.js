const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
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
  res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { content } = req.body;
  let comments = commentsByPostId[req.params.id] || [];

  comments.push({ id, content });

  commentsByPostId[req.params.id] = comments;

  await axios.post('http://localhost:4005/events', {
    type: 'CommentCreated',
    data: { id, content, postId: req.params.id },
  });

  res.status(201).send(comments);
});

app.post('/events', (req, res) => {
  console.log('received event', req.body.type);
  res.send({});
});

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
