const authController = require("express").Router();
const { body, validationResult } = require("express-validator");

const { register, login, logout } = require("../services/userService");
const { parseError } = require("../util/parser");

authController.get("/", async (req, res) => {
  const user = req.user;
  if (user) {
    res.status(200).json(user);
  }
});

authController.post("/register", async (req, res) => {
  try {
    
    const { errors } = validationResult(req);
    if (errors.length > 0) {
        throw errors;
    }
    const token = await register(req.body.username,req.body.password);
    res.json(token);
  } catch (error) {
   const message = parseError(error); 
    res.status(400).json({ message });
  }
  res.end()

});

authController.post("/login", async (req, res) => {
      try {
        const user = await login(req.body.username,req.body.password)
        res.json(user)
    } catch (error) {
        const message = parseError(error); 
        res.status(400).json({ message });
    }
  res.end()
     
});

authController.get("/logout", async (req, res) => {
  const token = req.token;
  await logout(token);
  res.status(204).end();
});

module.exports = authController;
