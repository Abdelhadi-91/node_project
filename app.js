const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const Customer = require("./models/customerSchema");
var moment = require("moment");
var methodOverride = require("method-override");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // jsp
app.use(methodOverride("_method"));

//auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));
const connectLivereload = require("connect-livereload");
const { resourceLimits } = require("worker_threads");
const { render } = require("ejs");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// get req
app.get("/", (req, res) => {
  Customer.find()
    .then((data) => {
      res.render("index", { arr: data, moment: moment });
    })
    .catch((err) => console.log(err));
});

app.get("/user/add.html", (req, res) => {
  res.render("user/add");
});

app.get("/edit/:id", (req, res) => {
  Customer.findById(req.params.id)
    .then((result) => {
      res.render("user/edit", { data: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/view/:id", (req, res) => {
  Customer.findById(req.params.id)
    .then((result) => {
      //result is object
      res.render("user/view", { data: result, moment: moment });
    })
    .catch((err) => console.log(err));
});

// connection de database 1J0LlavyWV7ZAyqf
mongoose
  .connect(
    "mongodb+srv://abdelhadi:1J0LlavyWV7ZAyqf@cluster0.qunun4p.mongodb.net/allData?appName=Cluster0"
  )
  .then(() => {
    // if connection success
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    // if connection failed
    console.log(err);
  });

// post req to store data
app.post("/user/add.html", (req, res) => {
  Customer.create(req.body)
    .then(() => {
      res.redirect("/user/add.html");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/search",(req,res) => {
  const key = req.body.key.trim()
  Customer.find({$or:[{firstName:key},{lastName:key}]})
  .then((result) => {
    console.log(result);
    res.render("user/search",{data : result, moment:moment})
  })
  .catch((err) => {
    console.log(err);
  })
})

//delete req
app.delete("/edit/:id", (req, res) => {
  Customer.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

//put req
app.put("/edit/:id", (req, res) => {
  Customer.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

// 404
app.use((req,res) => {
  res.status(404).render("404")
})