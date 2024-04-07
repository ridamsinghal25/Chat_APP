import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.send("GET request to homepage");
});

export { app };
