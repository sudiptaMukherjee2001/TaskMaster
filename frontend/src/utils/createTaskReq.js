import axios from "axios"

export const createTaskReq = async (reqBody) => {
    console.log("this is reqbody", reqBody);

    try {
        const res = await axios.post("http://192.168.1.5:8001/api/v1/task/create", reqBody)
        console.log("this data send to  mongodb ==>", res);
    } catch (error) {
        console.log("create api is not working", error.message);
    }

}