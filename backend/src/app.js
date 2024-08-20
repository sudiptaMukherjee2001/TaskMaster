import express from "express"
import cors from "cors"
/* Router import  */
import TaskCreateRoute from "./routes/task.routes.js"



const app = express();
app.use(cors())
app.use(express.json());

app.use("/api/v1/task", TaskCreateRoute)



export default app;