/* i need to add more safety check */

import { task_creation } from "../model/taskCreate.model.js";

const createTask = async (req, res) => {

    try {

        const { taskTitle, taskDate, taskInfo } = req.body;

        if (taskTitle || taskDate || taskInfo === "") {
            res.status("Please enter all 9the details")
        }



        const newUser = {
            taskTitle,
            taskDate,
            taskInfo
        }

        await task_creation(newUser).save();
        res.status(201).json(newUser)
        console.log("this res==>", newUser);


    } catch (error) {
        res.status(400).json({ error: error.message });

    }





}

export default createTask;