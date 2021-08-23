const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({ respsonse: "Server connected." });
});

module.exports = router;
