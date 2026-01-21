const express = require("express");
const app = express();

///==== Another Way To Write It ====///
// const express = require("express")();

app.get("/", (req, resp) => {
  resp.send("<h1>Basic Express Server!</h1>");
});
app.listen(3200);
