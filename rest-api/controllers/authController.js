const authController = require("express").Router();
const { body, validationResult } = require("express-validator");
const { getUserByIdCourse, getAllCourses } = require("../services/courseService");
const { register, login, logout,getMyCourses, getUserById } = require("../services/userService");
const { parseError } = require("../util/parser");



//authController.get("/", async (req, res) => {
 // const user = req.user;
 // console.log(user);

//  if (user) {
 //   res.status(200).json(user);
 // }
//});

authController.post("/register", async (req, res) => {
  try {
    const token = await register(req.body.username, req.body.password);
    res.status(201).json(token);
  } catch (error) {
    const message = parseError(error);
    res.status(400).json({ message });
  }
  res.end();
});

authController.post("/login", async (req, res) => {
  try {
    const user = await login(req.body.username, req.body.password);
    const userId = JSON.stringify(user._id);
    console.log(user);

    res.status(201).json(user);
  } catch (error) {
    const message = parseError(error);
    res.status(404).json({ message });
  }
  res.end();
});

authController.get("/profie", async (req, res) => {
  try {
    const courses = await getAllCourses();
    res.status(200).json(courses);
  } catch {
    res.status(400).json("Invalid courses");
  }
  
  });
   

authController.get("/logout", async (req, res) => {
  const token = req.token;
  await logout(token);
  res.status(204).end();
});

module.exports = authController;
