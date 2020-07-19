const mongoose = require('mongoose');



const schemaToDo = mongoose.Schema({
content : {
type: String,
require : true

},

date:{
type:Date,
default : Date.now
}

});




module.exports = mongoose.model('ToDoCollection',schemaToDo);


