import mongoose from "mongoose";
import app from "./app.js";

const Mongo_Url=process.env.MONGO_URL;

(async()=>{
    try{

        await mongoose.connect(Mongo_Url,{useNewUrlParser:true, useUnifiedTopology: true});
        console.log("Database Connected Successfully.");
    }
    catch(err)
    {
        console.log("Error while connecting", err);
    }
})();