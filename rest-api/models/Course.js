const { Schema, model, Types } = require("mongoose");

const URLPATTARN = /^https?:\/\/.+$/i;

const courseSchema = new Schema({
  title: { type: String,
   required: true,
   minlength: [4, "Course title must be at least 4 characters long"],
  },
  description: {
    type: String,
    required: true,
    minlength: [20, "Course discription must be at least 20 characters long"],
    maxlength: [50, "Course discription must be at most 50 characters long"],
  },
  imageUrl: {
    type: String,
    required: true,
    validate: {
      validator: (value) => URLPATTARN.test(value),
      message: "Invalid URL",
    },
  },
  duration: { type: String, required: [true, "Duration is required"] },
  createdAt: { type: String, required: true , default:()=>(new Date()).toISOString().slice(0,10)},
  users: { type: [Types.ObjectId], ref: "User", default: [] },
  owner:{type: Types.ObjectId, ref: "User", require: true },
});


const Course = model('Course', courseSchema);

module.exports=Course;