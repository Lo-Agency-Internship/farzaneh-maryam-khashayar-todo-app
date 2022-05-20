const express = require("express");
const port = 3000;
const path = require("path");
const app = express();

app.listen(port, () => {
  console.log(`The server is running succesfully on the port ${port}. `);
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile("./public/index.html", { root: __dirname });
});

app.use((req, res) => {
  res.send("Error 404: Not Found!");
});
