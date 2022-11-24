const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();

app.get("/", (request, response) => {
  const result = addDays(new Date(), 100);
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

module.exports = app;

app.listen(3000);
