const express = require("express");
const router = express.Router();
const axios = require('axios');

router.post('/create-job', async (req, res) => {
  const { token, cron_expression, url, cron_job_name } = req.body;

  try {
    const response = await axios.post(`https://www.easycron.com/rest/add`, {
      token,
      cron_expression,
      url,
      cron_job_name
    });
    res.send(response.data);
  } catch (error) {
    res.status(500).send({ error: 'Failed to create job' });
  }
});

module.exports = router;
