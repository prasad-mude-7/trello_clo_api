var mongoose = require('mongoose');



//what kind of fields will be there in collections
var boardSchema  = new mongoose.Schema({
  boardTitle: {
    type: String,
  },
  player : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  invite : [{
    email:String
  }]
      
},{ versionKey: false })
//mongoose.model('collection','schema)
mongoose.model('Board',boardSchema);
module.exports = mongoose.model('Board');

// export default Product