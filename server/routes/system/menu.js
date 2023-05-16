const Category = require("../../models/Category");
const dbmethods = require("../../utils/db/curd.js");
function result(code = 200, data = null, message = null) {
  return {
    code,
    data,
    message,
  };
}
module.exports = (router) => {
  router.post("/system/menu", async (req, res) => {
    const model = await Category.create(req.body);
    res.send(model);
  });

  router.get("/system/menu", async (req, res) => {
    const items = await Category.find();
    res.send(result(200, items, "查询成功2"));
  });

  router.delete("/system/menu", dbmethods.deleteOne(Category));
};
