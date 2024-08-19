import { Router } from "express";
/* Import controller */
import createTask from "../controller/CreateTask.Controller.js";
import { handelUpdateTask } from "../controller/updateTask.controller.js";



const router = Router();


router.route("/create").post(createTask);
router.route("/update/:id").put(handelUpdateTask);

export default router;