const express = require("express");
const port = 3000;
const path = require("path");
const app = express();
const {load , save} = require("./utils");


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.listen(port, () => {
  console.log(`The server is running succesfully on the http://localhost:${port}. `);
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
    const person =data.find(person =>person.email===content.email)
    if (person=== undefined){
      const err = "not-found"
      res.redirect(`/${err}`)

    }else{
      if (person.password===content.pass){
        res.redirect(`./pages/tasks.html/${person.id}`)

      }else{
        const err = "not-matched"
        res.redirect(`/${err}`)

      }
    }
    
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
      const personId = data.length;
      res.redirect(`./pages/tasks.html/${personId}`)
    }
    else{
      const err = "exists"
      res.redirect(`/${err}`)
    }
  }
})

app.get("/pages/tasks.html/:id", (req,res)=>{

  // getting the id from url
  const personId = req.params.id;
  // getting persons tasks



  res.sendFile("./public/pages/tasks.html", { root: __dirname })
})

app.get("/:err", (req,res)=>{
  res.sendFile("./public/index.html", { root: __dirname })
})







app.post("/pages/tasks.html",function(req,res){
const userTask= req.body;
})




// app.use((req, res) => {
//   res.send("Error 404: Not Found!");
// });
