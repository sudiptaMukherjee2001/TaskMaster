import { task_creation } from "../model/taskCreate.model.js";

export const handelUpdateTask = async (req, res) => {
    const { id } = req.params;

    console.log("Request ==>", req.body);

    try {
        const updatedTask = await task_creation.findByIdAndUpdate(id, req.body, { new: true });
        console.log("updated Task==>", updatedTask);

        if (!updatedTask) return res.status(404).json({ error: 'task not found' });
        res.json(updatedTask);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

