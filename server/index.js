const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require("./routes/index")(app);
require("./plugins/db")(app);

app.listen(3333, () => {
  console.log("ok");
});
