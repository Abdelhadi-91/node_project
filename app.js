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

// routes
app.get("/", (req,res)=> {
   res.render("index");
});
app.get("/user/add.html", (req,res)=> {
   res.render("user/add");
});
app.get("/user/add.html", (req,res)=> {
   res.render("user/add");
});
app.get("/user/view.html", (req,res)=> {
   res.render("user/view");
});
app.get("/user/edit.html", (req,res)=> {
   res.render("user/edit");
});



// connection de database 1J0LlavyWV7ZAyqf
mongoose
.connect("mongodb+srv://abdelhadi:1J0LlavyWV7ZAyqf@cluster0.qunun4p.mongodb.net/allData?appName=Cluster0")
.then( () => { // if connection success
    app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
}) 
})
.catch((err) => {  // if connection failed
    console.log(err)
});

app.use(express.urlencoded({extended: true})); // jsp


