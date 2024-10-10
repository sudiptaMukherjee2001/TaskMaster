import axios from "axios";
export const getAllTask = async () => {
    try {
        const allTask = await axios.get("http://192.168.1.11:8001/api/v1/task/");
        return allTask.data;

    } catch (error) {
        console.error("get api is not working ... Check the try block===>", error.message);

    }
}
export const getPerticularTask = async (id) => {
    console.log("this is id from per", id);

    try {
        const perticularTask = await axios.get(`http://192.168.1.11:8001/api/v1/task/${id}`);
        return perticularTask.data;

    } catch (error) {
        console.error(" getPerticularTask api is not working ... Check the try block===>", error.message);

    }
}