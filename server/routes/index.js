import { Router } from "express";
import { markAttendance,getAlldata } from "../controller/attendanceController.js";
const router=Router();

router.use("/addata",markAttendance);
router.use("/getData",getAlldata);



export default router;