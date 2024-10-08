import { Router } from "express";
/* Import controller */
import createTask from "../controller/CreateTask.Controller.js";
import { handelUpdateTask } from "../controller/updateTask.controller.js";
import { handelDeleteAllTask, handelDeleteTaskById } from "../controller/deleteTask.controller.js";
import { handelGetAllTask } from "../controller/getAllTask.controller.js";



const router = Router();
/* get all the information */
router.route("/").get(handelGetAllTask);
/* Create */
router.route("/create").post(createTask);
/* update */
router.route("/update/:id").put(handelUpdateTask);
/* delete */
router.route("/delete/:id").delete(handelDeleteTaskById);
router.route("/clearall").delete(handelDeleteAllTask);

export default router;