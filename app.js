const express = require("express");
const port = 3000;
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.listen(port, () => {
  console.log(`The server is running succesfully on the port ${port}. `);
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile("./public/index.html", { root: __dirname });
});

// app.use((req, res) => {
//   res.send("Error 404: Not Found!");
// });


app.post("/pages/tasks.html",function(req,res){
const userTask= req.body;

})

