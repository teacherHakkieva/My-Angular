const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require("../models/User");
const environment = require('../environment');


const tokenBlackList = new Set();

const validateToken = (token) => {
    try {
        const data = jwt.verify(token, environment.SECRET_KEY)
        return data
    } catch (error) {
        throw new Error('Invalid access token!')
    }
}

async function register(username, password){
  
    const existingUsername = await User.findOne({username})
    if (existingUsername) {
        throw new Error('Username is taken');
    }
    const user = await User.create({
        username,
        hashedPassword: await bcrypt.hash(password, 10), 
    })
    return createToken(user);

}

async function login(username, password){
    const user = await User.findOne({username})

    if(!user){
        throw new Error('Invalid username or password!')
    }

    const isUser = await bcrypt.compare(password, user.hashedPassword); 
   
    if(isUser){
        return createToken(user)
    }else {
        throw new Error('Invalid username or password!')
    }
}

async function logout(token){
    tokenBlackList.add(token);
}

function createToken(user){
    const payload = {
        _id: user._id,
        username: user.username,  
    }
    return {
        _id: user._id,
        username: user.username,
        accessToken: jwt.sign(payload, environment['JST_SECRET'])
    }
}


module.exports = {
    register,
    login,
    logout,
    validateToken
}