const Course = require("../models/Course");
const User = require("../models/User");

async function addCourse(course) {
  try {
    return await Course.create({ ...course });
  } catch (error) {
    throw new Error(error);
  }
}
async function getAllCourses() {
  return await Course.find({});
}

async function addEnroll(userId, courseId) {
  try {
    const user = await User.findById(userId);
    let array = user.enrolledCourses;
    array.push(courseId);
    await User.findByIdAndUpdate(userId, { enrolledCourses: array });
    const course = await Course.findById(courseId);
    const arrCourse = course.enrolledUser;
    arrCourse.push(userId);
    await Course.findByIdAndUpdate(courseId, { enrolledUser: arrCourse });
  } catch (error) {
    throw new Error(error);
  }
}
async function getAllByDate(search) {
  const query = {};
  if (search) {
    query.title = new RegExp(search, "i");
  }
  // sort is automaticly , createdAt:1 - ascending(1,2,3....)
  return Course.find(query).sort({ createdAt: 1 });
}

async function getReacent() {
  const courses = Course.find({}).sort({ createdAt: -1 }).limit(3);
  return courses;
}

async function getUserByIdCourse(_id) {
  return await Course.find({ owner: _id });
}

async function getById(id) {
  return await Course.findById(id);
}
const createCourse = async (course, id) => {
  try {
    course.owner = id;
    return await Course.create({ ...course });
  } catch (error) {
    throw new Error(error);
  }
};
async function deleteCourse(id) {
  return Course.findByIdAndDelete(id);
}

async function updateCourse(id, data) {
  try {
    return await Course.findByIdAndUpdate(
      id,
      { ...data },
      { runValidators: true }
    );
  } catch (error) {
    return error;
  }
}

module.exports = {
  getAllByDate,
  getReacent,
  getById,
  getUserByIdCourse,
  deleteCourse,
  addEnroll,
  getAllCourses,
  addCourse,
  createCourse,
  updateCourse,
};
