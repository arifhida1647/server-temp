const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/create-job", async (req, res) => {
  const { token, cron_expression, url, cron_job_name } = req.body;

  try {
    const response = await axios.post(`https://www.easycron.com/rest/add`, {
      token,
      cron_expression,
      url,
      cron_job_name,
    });
    res.send(response.data);
  } catch (error) {
    res.status(500).send({ error: "Failed to create job" });
  }
});

router.get("/delete-job", async (req, res) => {
  const { token, id } = req.query;

  try {
    const response = await axios.get(`https://www.easycron.com/rest/delete`, {
      params: {
        token,
        id,
      },
    });
    res.send(response.data);
  } catch (error) {
    res.status(500).send({ error: "Failed to delete job" });
  }
});

router.put("/update-job", async (req, res) => {
  const {url, hoursTime, minutesTime } = req.body.job;
  const token = "cvQ1UehtttwzRbOVxWVb1YLYjlqScpmBLWO09wSqGBY="; // Token bearer

  try {
    const response = await axios.put(
      `https://api.cron-job.org/jobs`,
      {
        job: {
          url,
          enabled: true,
          saveResponses: true,
          schedule: {
            timezone: "Asia/Jakarta",
            expiresAt: 0,
            hours: [hoursTime],
            mdays: [-1],
            minutes: [minutesTime],
            months: [-1],
            wdays: [-1],
          },
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    res.send(response.data);
  } catch (error) {
    res.status(500).send({ error: "Failed to update job" });
  }
});

module.exports = router;
