const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
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

//routes
const root = require("./routes/root");
const addUser = require("./routes/addUser");
const editUser = require("./routes/editUser");
const search = require("./routes/search");
const view = require("./routes/view");
app.use(root);
app.use("/user", addUser);
app.use("/edit", editUser);
app.use(search);
app.use("/view", view);

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

// 404
app.use((req, res) => {
  res.status(404).render("404");
});
