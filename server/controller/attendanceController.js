
import Attendances from "../models/attendanceSchema.js";
import {json} from 'express';


export const markAttendance=async(req,res)=>{

    const userInp=req.body;
    const bookingDate= userInp.bookingDate;
    const bookingStatus= userInp.bookingStatus;
    

    // const exitBooking=await Attendances.findByIdAndUpdate({date:bookingDate},{status:bookingStatus});
     const exitBooking=await Attendances.findOne({date:bookingDate});

    if(!exitBooking)
    {
        const newdata=await Attendances.create({date:bookingDate,status:bookingStatus});

        if(newdata)
        {
            res.status(200).json({

                msg:"new data added",
                newdata

            })
        }
    }
    else{

        const updatedData=await Attendances.findByIdAndUpdate({date:bookingDate},{status:bookingStatus});
        res.status(200).json({
            msg:"Data updated successfully",
            updatedData
        })
    }
};

export const  getAlldata= async(req,res)=>{

    const allData= await Attendances.find({});

    if(!allData)
    {
        throw Error("Data not fetched");
    }

    res.status(200).json({
        msg:"successfully fetched",
        allData
    })
}