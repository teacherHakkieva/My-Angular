const courseController = require("express").Router();
const {
  getUserById,
  getUserId,
  updateCoursesOnUser,
} = require("../services/userService");
const mongoose = require("mongoose");
const { User } = require("../models/User");
const {
  addCourse,
  getAllCourses,
  getAllByDate,
  getUserByIdCourse,
  getById,
  getCourse,
  deleteCourse,
  updateCourse,
  enrollUser,
  decode,
  addEnroll,
} = require("../services/courseService");
const { body } = require("express-validator");
const { default: jwtDecode } = require("jwt-decode");


courseController.post("/", async (req, res) => {
  const data = req.body;
  const decode = jwtDecode(req.user.token)._id;

  try {
    data.owner = decode;
    const course = await addCourse(data);
    updateCoursesOnUser(decode, course._id);

    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  res.end()
});

courseController.get("/", async (req, res) => {
  try {
    const courses = await getAllCourses();
    res.status(200).json(courses);
  } catch {
    res.status(400).json("Invalid courses");
  }
});

courseController.get("/:id", async (req, res) => {
  const id = req.params.id;
  const course = await getById(id);
  res.status(200).json(course);
});

courseController.get("/enroll/:id", async (req, res) => {
  try {
    const userId = jwtDecode(req.user.token)._id;
    const courseId = req.params.id;
    await addEnroll(userId, courseId);
    res.status(200).json("Success");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

courseController.put("/:id", async (req, res) => {
  const userId = jwtDecode(req.user.token)._id;
  
  const id = req.params.id;
  const data = req.body;
  const course = await getById(id);
  try {
    if (userId == course.owner._id) {
      await updateCourse(id, data);
      const updatedCourse = await getById(id);
      res.status(200).json(updatedCourse);
    } else {
      throw new Error("you are not owner");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  res.end();
});

courseController.delete("/:id", async (req, res) => {
  const id = req.params.id;
  // console.log(id);
  await deleteCourse(id);
  res.status(200).json("Deleted!");
});
module.exports = courseController;
