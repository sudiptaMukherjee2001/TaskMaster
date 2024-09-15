'use client'
import React from 'react'
import { TaskViewBoxCon } from '../style/TaskViewBox.style'
import { Box, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CustomBtn from './CustomBtn';
import { updateTaskReq } from '@/utils/updateTaskReq.js';
import { useTaskContext } from '@/lib/contextApi.js';
import { usePathname } from 'next/navigation'
const TaskViewBox = ({ setOpenViewBox, taskDataInContext, perticulerTaskId }) => {
    const { taskData, setTaskData } = useTaskContext()
    const path = usePathname();
    console.log("path name==>", path);

    const closeModal = () => {
        setOpenViewBox(false);

    }
    // console.log("====taskDataInContext in view box====");
    // console.log(taskDataInContext)
    // console.log("=============================================");
    const { taskTitle, taskDate, taskInfo } = taskDataInContext;
    const handelCheckbox = async (e, index) => {
        // console.log("checkbox clicked", e);
        console.log("index comming", index);
        let newTaskInfo;
        let iscomplete;

        newTaskInfo = taskDataInContext.taskInfo.map((task, ind) => {
            if (ind == index) {
                iscomplete = task.istaskCompleted = e.target.checked;
                return { ...task, istaskCompleted: iscomplete }; // Toggle based on checkbox state

            }

            return task
        });
        console.log("newTaskInfo====>", newTaskInfo);
        const values = {
            taskTitle,
            taskDate,
            taskInfo: newTaskInfo
        }
        /* update the context with new updated values */
        setTaskData({
            ...taskDataInContext,
            taskInfo: newTaskInfo
        });
        console.log("This values will have isCompleted updated field==>", values);
        /* call update api */
        await updateTaskReq(perticulerTaskId, values);



    }
    console.log("taskDataInContext===>", taskDataInContext);

    return (
        <TaskViewBoxCon>
            <Box className="task_title task_Info">
                <Typography variant="h5" color="initial">
                    Task title :
                </Typography>
                <Box
                    className="task_title_value task_Info_value"
                >
                    <Typography variant="h5" color="initial">
                        {taskTitle}
                    </Typography>

                </Box>

            </Box>
            <Box className="task_date task_Info">
                <Typography variant="h5" color="initial">
                    Task date :
                </Typography>
                <Box
                    className="task_date_value task_Info_value"
                >
                    <Typography variant="h5" color="initial">
                        {taskDate}
                    </Typography>

                </Box>

            </Box>
            {/* Each task with checkbox */}
            <Box className="all_task">
                {
                    path === "/completed-task" ?
                        (
                            /*If User has  complete any one task or user does not complete any task then below content  will display accordingly */
                            taskDataInContext?.taskInfo?.some(task => task.istaskCompleted) ?
                                taskDataInContext?.taskInfo?.map((task, index) => (
                                    task.istaskCompleted ? (
                                        <Box className="task_names" key={index}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={task.istaskCompleted}

                                                    />
                                                }
                                            />
                                            <Box className="tasks">
                                                <Typography variant="h5" color="initial">
                                                    {task?.taskname}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ) : null
                                ))
                                :
                                <Typography variant="h5" color="initial">You have not completed any tasks</Typography>
                        )
                        :
                        taskDataInContext?.taskInfo?.map((task, index) => (
                            <Box className="task_names" key={index}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={task.istaskCompleted}
                                            onChange={(e) => handelCheckbox(e, index)}
                                        />
                                    }
                                />
                                <Box className="tasks">
                                    <Typography variant="h5" color="initial">
                                        {task?.taskname}
                                    </Typography>
                                </Box>
                            </Box>
                        ))
                }
            </Box>

            <Box className="Btn_Sec">
                <CustomBtn variant="outlined" textColor="#ffedd5" bgColor="#0f172a" width={true} onClick={closeModal} >Close</CustomBtn>
            </Box>


        </TaskViewBoxCon >

    )
}

export default TaskViewBox