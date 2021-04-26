const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  publicId: String,
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
