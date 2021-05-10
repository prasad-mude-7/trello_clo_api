var mongoose = require('mongoose');



//what kind of fields will be there in collections
var userSchema  = new mongoose.Schema({
  title: {
    type: String,
  },
  player : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  board:   { type: mongoose.Schema.Types.ObjectId, ref: 'Board' },
  invite : Array
      
},{ versionKey: false })
//mongoose.model('collection','schema)
mongoose.model('Completed',userSchema);
module.exports = mongoose.model('Completed');

// export default Product