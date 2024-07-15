const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    imgurl:String,

    description:String,
    color:String,
    forRent:Boolean,
    occasion:String,
    inWishlist: { type: Boolean, default: false }
});



const Item = mongoose.model("Item",itemSchema);

module.exports= Item;