const { Schema, model, default: mongoose } = require("mongoose");

const userSchema = new Schema({
  username: {type: String,required: true,unique: true},
  hashedPassword: {
    required: true,
    type: String,
},
  courses:[{type:mongoose.Types.ObjectId, ref: 'Course'}]
});
 
userSchema.index({username:1},
  {
    collation: {
      locale: 'en',
      strength: 2 
    }
  }
  )

const User = new mongoose.model("User", userSchema);

module.exports = User;
