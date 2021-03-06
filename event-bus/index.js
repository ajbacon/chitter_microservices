const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', (req, res) => {
  const event = req.body;

  axios.post('http://localhost:4000/events', event);
  axios.post('http://localhost:4001/events', event);
  axios.post('http://localhost:4002/events', event);

  console.log('emitted event', req.body.type);

  res.send({ status: 'OK' });
});

const PORT = 4005;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
