import axios from "axios";

export const updateTaskReq = async (id, updatedBody) => {
    console.log("updated body==>", updatedBody);


    try {
        if (!id) {
            console.log("updated body", updatedBody);
            console.log("updated id", id);
            throw new Error('Task id has not found !!!!')
        }
        const res = await axios.put(`http://192.168.1.11:8001/api/v1/task/update/${id}`, updatedBody);
        return res.data;


    } catch (error) {
        console.log("Task has not found in update req !!!!==>", error.message);

    }


}