const express = require("express") ;
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const Customer = require("./models/customerSchema");

app.set("view engine","ejs");
app.use(express.static('public'))
app.use(express.urlencoded({extended: true})); // jsp

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

// get req
app.get("/", (req,res)=> {
   console.log("------------------------------------")
   Customer.find()
   .then((data)=>{
      res.render("index",{arr:data})
   })
   .catch((err)=> console.log(err))
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

// post req to store data
app.post('/user/add.html',(req,res) => {
   const costumer = new Customer(req.body)
   costumer
   .save()
   .then( result => {
      res.redirect('/user/add.html')
   })
   .catch(err=>{
      console.log(err)
   })
})