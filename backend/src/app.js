import express from "express"

/* Router import  */
import TaskCreateRoute from "./routes/task.routes.js"



const app = express();

app.use(express.json());

app.use("/api/v1/task", TaskCreateRoute)



export default app;