import { Router } from "express";
/* Import controller */
import createTask from "../controller/CreateTask.Controller.js";



const router = Router();


router.route("/create").post(createTask);

export default router;