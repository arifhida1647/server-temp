const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get('/create-job', async (req, res) => {
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

module.exports = router;
