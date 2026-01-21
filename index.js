const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("<h1>Basic Express Server!</h1>");
});
app.get("/about", (req, res) => {
  res.send(
    "<h1>About Page</h1><p>This is the about page of our basic Express server.</p>",
  );
});
app.get("/contact", (req, res) => {
  res.send(
    "<h1>Contact Page</h1><p>This is the contact page of our basic Express server.</p>",
  );
});
app.listen(3200);
