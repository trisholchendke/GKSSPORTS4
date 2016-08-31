/**
 * http://usejsdoc.org/
 */
var mongoose = require('mongoose');

// Create the MovieSchema.
var UsersSchema = new mongoose.Schema({
  username: {type: String, index: {unique: true, dropDups: true}},
  password: { type: String },
  email: { type: String},
  role: { type: String },
  eventcode:{ type: String },
  userrole:{ type: String }
  
	  
  
});

// Export the model.
module.exports = mongoose.model('users', UsersSchema);