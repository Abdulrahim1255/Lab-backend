import mongoose, { model } from "mongoose";

const Schema= mongoose.Schema;

const ItemSchema= new Schema({
  
    email:{type:String,require:true},
    password:{type:String,require:true},
    reppassword:{type:String,require:true}

},{timestamps:true})


export default mongoose.model('Item',ItemSchema,'Items')