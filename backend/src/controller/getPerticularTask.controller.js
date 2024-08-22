export const handelGetperticularTask = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) {
            return res.status(400).json({ message: "id is required" })
        }
        const taskInfo = await task_creation.findById(id);
        res.status(200).json(taskInfo);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }

}