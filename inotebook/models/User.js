//mongoose code , storing mongoose in const 
const mongoose = require("mongoose");

//mongoose setup connection
mongoose.connect("mongodb://127.0.0.1:27017/inotebookData");  //127.0.0.1 this is local host.
//mongoose will connect backend with mongodb 27017 is port number then write any name of database


//schema code
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
},
email: {
    type: String,
    required: true,
    unique: true
},
password: {
    type: String,
    required: true
},
date: {
    type: Date,
    default: Date.now
},
});


//model code
//mongoose.model("name any collection", schema);
module.exports = mongoose.model("user", UserSchema);


