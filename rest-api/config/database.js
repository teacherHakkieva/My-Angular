const mongoose = require('mongoose');

function initDatabase(){
    return mongoose.connect("mongodb://localhost:27017/project-angular123")
}

module.exports = initDatabase;