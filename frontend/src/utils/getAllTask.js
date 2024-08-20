import axios from "axios";
export const getAllTask = async () => {
    try {
        const allTask = await axios.get("http://localhost:8001/api/v1/task/");
        return allTask.data;

    } catch (error) {
        console.error("get api is not working ... Check the try block===>", error.message);

    }


}