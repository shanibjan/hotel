import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  category:{
    type:String,
    require:true,
    trim:true,
  },
  name:{
    type:String,
    require:true,
    unique:true,
  },
  price:{
    type:String,
    require:true,
  },
  description:{
    type:String,
    require:true,
  },
 
 
},
{
  timestamps:true
})



export default mongoose.model('menu',menuSchema)