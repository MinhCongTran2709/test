const mongoose = require("mongoose");
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Pizza = new Schema({
    name: { type: String} ,   
    image: { type: String} ,
    price: { type: String}, 
    slug: {type: String, slug: 'name', slugOn:{updateOne:true}, unique: true}
    }, 
    // __v
    { versionKey: false }
);

mongoose.plugin(slug);
Pizza.plugin(mongooseDelete, {overrideMethods: 'all'});

module.exports = mongoose.model('Pizza', Pizza);