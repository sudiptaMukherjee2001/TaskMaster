import { task_creation } from "../model/taskCreate.model.js";
import mongoose from 'mongoose';
export const handelGetperticularTask = async (req, res) => {
    const { id } = req.params;
    console.log("req==>", id);

    try {
        if (!id) {
            return res.status(400).json({ message: "id is required" })
        }

        const task = await task_creation.findById(id);
        console.log("task==>>>", task);

        res.status(200).json(task);
        return task;

    } catch (error) {
        res.status(400).json({ error: error.message });
    }

}