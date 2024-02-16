// server.js
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/create-job', async (req, res) => {
  const { token, cron_expression, url } = req.query;

  try {
    const response = await axios.get(`https://www.easycron.com/rest/add`, {
      params: {
        token,
        cron_expression,
        url
      }
    });
    res.send(response.data);
  } catch (error) {
    res.status(500).send({ error: 'Failed to create job' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
