const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const environment = require("../environment");
const Course = require("../models/Course");

const tokenBlackList = new Set();
const createToken = (user) => {
  const payload = {
    _id: user._id,
    username: user.username,
  };
  const accessToken = jwt.sign(payload, environment.JST_SECRET);
  return {
    _id: user._id,
    username: user.username,
    accessToken,
  };
};

async function validateToken(token) {
  try {
    const data = jwt.verify(token, environment["JST_SECRET"]);
    return data;
  } catch (error) {
    throw new Error("Invalid access token!");
  }
}

async function register(username, password) {
  const existingUsername = await User.findOne({ username });
  if (existingUsername) {
    throw new Error("Username is taken");
  }

  const user = await User.create({ username, password });

  return createToken(user);
}

async function login(username, password) {
  const user = await User.findOne({ username });
  console.log(JSON.stringify(user._id));
  if (!user) {
    throw new Error("Invalid username or password!");
  }
  const isUser = await bcrypt.compare(password, user.password);
  if (isUser) {
    return createToken(user);
  } else {
    throw new Error("Invalid username or password!");
  }
}

async function logout(token) {
  tokenBlackList.add(token);
}
async function getMyCourse(id){
  const user = await User.findById(_id);
  return array = user.myCourse;
}
async function getUserById(id) {
  return await User.findById(id);
}
async function getMyCourses() {
  return await User.find({}).all({ myCourse: array });
}

const updateCoursesOnUser = async (_id, courseId) => {
  //  console.log(`ID: ${_id}`);
  //   console.log(`courseId:  ${courseId}`);
  try {
    const user = await User.findById(_id);
    let array = user.myCourse;
    array.push(courseId);
    await User.findByIdAndUpdate(_id, { myCourse: array });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  updateCoursesOnUser,
  register,
  login,
  logout,
  validateToken,
  getUserById,
  getMyCourses,
  getMyCourse
};
