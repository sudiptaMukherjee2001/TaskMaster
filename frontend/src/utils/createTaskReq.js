import axios from "axios"

export const createTaskReq = async (reqBody) => {
    try {
        const res = await axios.post("http://localhost:8001/api/v1/task/create", reqBody)
        console.log("this data send to  mongodb ==>", res);
    } catch (error) {
        console.log("create api is not working", error.message);
    }

}