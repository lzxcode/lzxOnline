const deleteOne = (module) => {
  return async function (req, res) {
    if (!(await module.findOne(req.body))) return res.send("请求数据不存在！");
    await module.deleteOne(req.body);
    res.send("删除成功");
  };
};

module.exports = {
  deleteOne,
};
