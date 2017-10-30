import express from "express";
import config from "./config.js";
import serverRender from './serverRender';

const app = express();

app.use(express.static("public"));

// Set the view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const initialContent = serverRender();
  res.render("index", { initialContent });

  // res.render("index", { answer: 42 }); without server side rendering
});

app.listen(config.port, function listenHandler() {
  console.log(`Running on ${config.port}...`);
});
