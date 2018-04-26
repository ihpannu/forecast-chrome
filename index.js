const Forecast = require("forecast-api");
const express = require("express");
const app = express();

app.use;

const forecast = new Forecast({
  accountId: "913094",
  authorization:
    "Bearer 1561990.pt.ujON2kOeB1c9wgRt4EUQfuc6OCFU-9EBp7K9RpKMyo2WaldHHxz1uRvrI_MDygMHuu2jFLmWEJ2YKmHvJPT7Sg"
});

// forecast.projects((err, projects) => {
//   if (err) throw err;
//   console.log(projects);
//   app.get("/", (req, res) => {
//     res.send(projects);
//   });
// });

app.get("/projects", (req, res) => {
  forecast.projects((err, projects) => {
    if (err) throw err;
    // console.log(projects);
    res.send(projects);
  });
});

app.get("/assignment", (req, res) => {
  forecast.assignments(function(err, assignments) {
    if (err) throw err;
    res.send(assignments);
    console.log(assignments);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
