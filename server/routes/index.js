const express = require("express");
const fs = require("fs");
const join = require("path").join;
const router = express.Router();

(function (startPath) {
  function finder(path) {
    let files = fs.readdirSync(path);
    files.forEach((val, index) => {
      let fPath = join(path, val);

      let stats = fs.statSync(fPath);
      if (stats.isDirectory()) finder(fPath);
      if (stats.isFile() && val !== "index.js") {
        require("../" + fPath)(router);
      }
    });
  }
  finder(startPath);
})("./routes");

module.exports = (app) => {
  app.use("/zooyue", router);
};
