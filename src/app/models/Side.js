const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Side = new Schema({
    name: { type: String} ,   
    image: { type: String} ,
    price: { type: String}, 
    slug: {type: String, slug: 'name', slugOn:{updateOne:true}}
    }, 
    // __v
    { versionKey: false }
);

module.exports = mongoose.model('Side', Side);