var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var dbName = 'messageDB';
var connectionString = 'mongodb://localhost:27017/' + dbName;
mongoose.connect(connectionString);
 
var messageSchema = new Schema({
  sender: String,
  content: String,
  recipient: String,
  timestamp: String
});
 
module.exports = mongoose.model('Message', messageSchema);
