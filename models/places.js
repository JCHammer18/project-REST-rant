
const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: {type:String, required:true},
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {
    type : Number,
    min : [1673, 'Surely not that old?!'],
    max : [new Date().getFullYear(), 'Hey, this year is in the future!']
  },
  comments : [{type : mongoose.Schema.Types.ObjectId, ref : 'Comment'}]
})

placeSchema.methods.showEstatblished = function (){
  return `${this.name} has been serving ${this.city},${this.state} since ${this.founded}`
}

module.exports = mongoose.model('Place', placeSchema)

