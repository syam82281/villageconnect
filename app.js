const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("VillageConnect Server is Running!");
});

app.get("/api/village", (req, res) => {
  res.json({ message: "Welcome to VillageConnect API!" });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("VillageConnect API running on port 3000");
});
