const express = require("express") ;
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const Article = require("./models/atricleSchema");

app.set("view engine","ejs");
app.use(express.static('public'))


//auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
 
 
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
 
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});


app.get("/", (req,res)=> {
   /*res.sendFile("./views/home.html",{root:__dirname});*/
   res.render("home",{myTitle:"Home"});
   // get data from db
   Article
   .find()
   .then((result)=>{
    console.log(result)
   })
   .catch((err)=>{
    console.log(err);
   })
});


// connection de database
mongoose
.connect("mongodb+srv://abdelhadi:qlfnda4412@cluster0.qunun4p.mongodb.net/allData?appName=Cluster0")
.then( () => { // if connection success
    app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
}) 
})
.catch((err) => {  // if connection failed
    console.log(err)
});

app.use(express.urlencoded({extended: true})); // jsp

app.post("/", (req,res) => {
    const article = new Article(req.body);
    console.log(req.body); // log the entry in the console

    res.redirect("/");
    // send data to db
    article
    .save()
    .then(()=>{
        res.redirect("/");
    })
    .catch((err)=>{
        console.log(err);
    })
});
