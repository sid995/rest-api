const express = require("express");
const bodyParser = require("body-parser");

// Set up express app
const app = express();

app.use("/api", require("./routes/api"));

// listen for requrests
app.listen(process.env.port || 4000, function() {
  console.log("Now listening for requests");
});
