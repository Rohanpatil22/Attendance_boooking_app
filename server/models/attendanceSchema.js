import mongoose from "mongoose";
import { Schema } from "mongoose";


const attwndanceSchema=new mongoose.Schema({

    date:{
        type:String,
    },
    status:{
        type:String,
    },
},
{timestamps:true});

export default mongoose.model('Attendances',attwndanceSchema);