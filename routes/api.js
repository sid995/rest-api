const express = require("express");
const router = express.Router();

// get list of ninjas from db
router.get("/ninjas", function(req, res) {
  res.send({ type: "GET" });
});

// Add new ninja to db
router.post("/ninjas", function(req, res) {
  res.send({ type: "POST" });
});

// Update ninja in db
router.put("/ninjas/:id", function(req, res) {
  res.send({ type: "PUT" });
});

// Delete ninja from db
router.get("/ninjas/:id", function(req, res) {
  res.send({ type: "DELETE" });
});

module.exports = router;
