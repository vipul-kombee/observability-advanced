const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  const delay = Math.random() * 1000;

  setTimeout(() => {
    if (Math.random() < 0.3) {
      return res.status(500).send("Error occurred");
    }
    res.send("OK");
  }, delay);
});

app.listen(3000);