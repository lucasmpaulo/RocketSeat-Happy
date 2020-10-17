// Importing dependencies
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

// Initialing express function
const server = express();

// Using static files
server
  .use(express.urlencoded({ extended: true }))
  .use(express.static("public"))
  // Configure template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  // Creating routes
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanage", pages.saveOrphanage);

// Switch on the server
server.listen(5500);
