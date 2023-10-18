import express, {urlencoded} from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
const app=express();

import router from './routes/index.js';

dotenv.config();

const PORT=process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get('/',(req,res)=>{

    res.send("<h2>Welcome to the backend</h2>")
})

app.use("/api/v1",router);

app.listen((PORT),()=>{

    console.log(`Your express app is working fine on the port ${PORT}`);

})

export default app;