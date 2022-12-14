const homeController = require("express").Router();
const mongoose = require("mongoose");

const { getReacent } = require("../services/courseService");

homeController.get("/", async (req, res) => {
  try {
    const coursesL = await getReacent();
    res.status(200).json(coursesL);
  } catch (error) {
    res.status(400).json("Invalid course ID");
  }
  res.end();
});
module.exports=homeController;
