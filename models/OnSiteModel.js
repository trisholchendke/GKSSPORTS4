/**
 * http://usejsdoc.org/
 */
var mongoose = require('mongoose');

// Create the MovieSchema.
var UsersSchema = new mongoose.Schema({
  onsite_title: {type: String },
  onsite_desciption: { type: String },
  onsite_video: { type: String},
  onsite_document: { type: String },
  onsite_user:{ type: String },
  onsite_datetime:{ type: String }
  
	  
  
});

// Export the model.
module.exports = mongoose.model('onsite', UsersSchema);