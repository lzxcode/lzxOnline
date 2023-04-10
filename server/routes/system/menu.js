const Category = require("../../models/Category");
module.exports = (router) => {
  router.post("/system/menu", (req, res) => {
    // Category.r

    console.log(req.body);
    res.send("hello");
  });
};
