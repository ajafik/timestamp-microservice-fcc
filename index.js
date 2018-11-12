const express = require("express");
const app = express();


app.get("/api/timestamp", (req, res) => {
  var date = new Date();
  var data = {
    "unix": date.getTime(),
    "utc": date.toUTCString()
  }
  res.status(200).json(data);
});

app.get("/api/timestamp/:time_stamp", (req, res) => {
  var date = new Date(req.params.time_stamp);
  var data = {
    "unix": date.getTime(),
    "utc": date.toUTCString()
  }
  if (date.toString() != "Invalid Date") {
    data = {
      "unix": date.getTime(),
      "utc": date.toUTCString()
    }
  } else {
    data = {
      "error": "Invalid Date"
    }
  }

  res.status(200).json(data);
});

app.listen(3001, function() {
  console.log(`App listening on port => 3000`);
})