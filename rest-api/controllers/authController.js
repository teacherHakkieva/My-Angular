const authController = require("express").Router();
const { body, validationResult } = require("express-validator");

const { register, login, logout,getUserById } = require("../services/userService");
const { parseError } = require("../util/parser");

authController.get("/", async (req, res) => {
const user = req.user;  
console.log(user);

if (user) {
res.status(200).json(user);
  }
});

authController.post("/register", async (req, res) => {
  try {

    const token = await register(req.body.username,req.body.password);
    const userId=JSON.stringify(user._id);

    res.status(201).json(token);
    
  } catch (error) {
   const message = parseError(error); 
    res.status(400).json({ message });
  }
  res.end()

});

authController.post("/login", async (req, res) => {
      try {
        const user = await login(req.body.username,req.body.password);
        const userId=JSON.stringify(user._id);
        
      res.status(201).json(user);
       
    } catch (error) {
      const message = parseError(error); 
    res.status(404).json({ message }); 
    }
  res.end() 
     
});
authController.get('/profile/:id', async(req,res)=>{
  try{
  const id=req.params.id;
  const user=await getUserById(id);
  
res.status(200).json(user)
  }
  catch(error){
    res.status(400).json('Invalid user ID')
   
  }
})
authController.get("/logout", async (req, res) => {
  const token = req.token;
  await logout(token);
  res.status(204).end();
});

module.exports = authController;
