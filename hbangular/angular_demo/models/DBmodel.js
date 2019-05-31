var mongoose = require('mongoose');

module.exports = mongoose.model('demoCollection', {
   fname: {type: String},
   lname: {type: String},
   age: {type: Number}
});