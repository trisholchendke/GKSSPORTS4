/**
 * http://usejsdoc.org/
 */
var mongoose = require('mongoose');

// Create the MovieSchema.
var publisherSchema = new mongoose.Schema({
  username: {type: String, index: {unique: true, dropDups: true}},
  password: { type: String },
  organization:{type: String },
  incharge:{type: String },
  designation:{type: String },
  email: { type: String },
  contact:{type: String },
  contract:{type: String },
  contractype:{type:String},
  eventcode:{ type: String },
  fromdate:{type: String },
  todate:{type:String },
  paymentstatus:{type: String }
  
});

// Export the model.
module.exports = mongoose.model('publisher', publisherSchema);