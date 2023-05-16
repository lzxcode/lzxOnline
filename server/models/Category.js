const mongoose = require("mongoose");

// 表内容字段
const schema = new mongoose.Schema({
  theme: { type: String },
});

// 读取创建分类表

module.exports = mongoose.model("Category", schema);
