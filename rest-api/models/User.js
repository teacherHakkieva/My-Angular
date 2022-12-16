const bcrypt = require('bcrypt')
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {type: String,required: true,unique: true},
  password: {
    required: true,
    type: String,
},
enrolledCourses:[
  {type: mongoose.Types.ObjectId, ref:'Course'}
],
myCourse:[{ type: mongoose.Types.ObjectId, ref: 'Course'}]
});
  
userSchema.index({username:1},
  {
    collation: {
      locale: 'en',
      strength: 2 
    }
  }
  )
  userSchema.pre('save', function(next){
    bcrypt.hash(this.password,10)
    .then((hash)=>{
      this.password=hash
      return next()
    })
  })

const User = new mongoose.model("User", userSchema);

module.exports = User;
