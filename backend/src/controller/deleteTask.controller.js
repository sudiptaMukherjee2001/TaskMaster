import { task_creation } from "../model/taskCreate.model.js";

export const handelDeleteTaskById = async (req, res) => {


    const { id } = req.params;
    try {
        const deletedTask = await task_creation.deleteOne({ _id: id });
        if (!deletedTask) return res.status(404).json({ error: 'Task not found' });
        res.json({ message: 'Task deleted successfully', data: deletedTask });


    } catch (error) {
        res.status(401).json({ message: error.message })
    }

}

export const handelDeleteAllTask = async (req, res) => {
    try {

        const deletedTAllask = await task_creation.deleteMany({});
        if (!deletedTAllask) return res.status(404).json({ error: 'Task not found' });
        res.json({ message: 'All Task deleted successfully', data: deletedTAllask });



    } catch (error) {
        res.status(401).json({ message: error.message })

    }
}

