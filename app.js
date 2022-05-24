const express = require("express");
const port = 3000;
const path = require("path");
const app = express();
const {load , save} = require("./utils");


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.listen(port, () => {
  console.log(`The server is running succesfully on the port ${port}. `);
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile("./public/index.html", { root: __dirname });
});

app.post("/" ,(req,res)=>{
  const data = JSON.parse(load());
  const content = req.body;
  if(!(content.hasOwnProperty('name'))){
    //login process
    

    console.log("login")
  }
  else{
    //signup process
    const exists = data.find(person=> person.email === content.email)
    if(exists === undefined){
      data.push({
        id: data.length + 1,
        name: content.name,
        email: content.email,
        password: content.pass,
        tasks: []
      })
      save(data);
      req.session.localVar = data.length+1;
      res.redirect("./public/pages/tasks.html")
    }
  }
})




app.post("/pages/tasks.html",function(req,res){
const userTask= req.body;
<<<<<<< HEAD
=======
})

app.post("/",function(req,res){
console.log(req.body);
>>>>>>> 58c0deb3bf02c4878b69249f4fcaf5640cb3475e
})




// app.use((req, res) => {
//   res.send("Error 404: Not Found!");
// });
