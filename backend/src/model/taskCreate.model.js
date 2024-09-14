import mongoose, { Schema } from "mongoose"
const taskArr = new Schema(
    {

        taskname: {
            type: String,
            required: true
        },
        taskPriority: {
            type: String,
            // required: true
        },
        istaskCompleted: {
            type: Boolean,
            default: false,
            // required: true
        }
    });
const taskschema = new Schema(
    {
        taskTitle: {
            type: String
        },
        taskDate: {
            type: String,
            required: true
        },
        taskInfo: [taskArr],


    },
    {
        timestamps: true, // Enable timestamps
        id: true // Include an id field
    }

)

export const task_creation = mongoose.model("task_creation", taskschema);