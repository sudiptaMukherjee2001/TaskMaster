import { task_creation } from "../model/taskCreate.model.js"

export const handelGetAllTask = async (req, res) => {
    try {
        const allTask = await task_creation.find({})
        if (!allTask) {
            return res.status(404).json({ message: "No task found" })
        }

        res.status(200).json(allTask)


    } catch (error) {
        res.status(400).json({ error: error.message });

    }
}