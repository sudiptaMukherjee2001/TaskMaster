'use client'
import React, { useEffect, useState } from 'react'

import { usePathname } from 'next/navigation'
/* Stlyed component */
import { TaskCardBox } from '../style/TaskSummary.style';
import CustomBtn from './CustomBtn';
/* Mui import */
import { Box } from '@mui/material'
import DialogBox from './DialogBox';
import { getPerticularTask } from '@/utils/getAllTask.js';
import { useTaskContext } from '@/lib/contextApi.js';
import useResponsive from '@/lib/allMediaQuery.js';
import TaskViewBox from './TaskViewBox.jsx';


const TaskSummary = ({ id, title, date, presentDate, data }) => {
    const [openEditDialog, setOpen] = useState(false);
    const [openViewDialog, setOpenViewBox] = useState(false);
    const [isEditable, setEditable] = useState(false);
    const { taskData, setTaskData } = useTaskContext()
    const { isMobile } = useResponsive();


    console.log("this is date==>", date);
    console.log(" presentDate > date", presentDate > date);

    const pathname = usePathname();

    let fetchPerticularTaskInfo;

    /* this handelStoreTaskDeatilsInContext func will store the task datas in context */
    const handelStoreTaskDeatilsInContext = async () => {
        fetchPerticularTaskInfo = await getPerticularTask(id);
        console.log("fetched perticular task", fetchPerticularTaskInfo);
        setTaskData({

            taskTitle: fetchPerticularTaskInfo?.taskTitle,
            taskDate: fetchPerticularTaskInfo?.taskDate,
            taskInfo: fetchPerticularTaskInfo?.taskInfo
        });
    }

    const openDialogBoxForEdit = async () => {
        setEditable(true); // Set the editable state to true
        await handelStoreTaskDeatilsInContext(); // Fetch task data asynchronously
        console.log("this is value for isEditable==>", isEditable);
        setOpen(!openEditDialog); // Open the dialog only after data fetching is complete
    }

    /* Dialog box for View BTN  */
    const openDialogBoxForView = async () => {
        setEditable(true); // Set the editable state to true
        await handelStoreTaskDeatilsInContext(); // Fetch task data asynchronously
        console.log("this is value for isEditable==>", isEditable);
        setOpenViewBox(!openViewDialog); // Open the dialog only after data fetching is complete
    }
    const openDialogBoxForViewForPendingSec = async (task) => {
        setEditable(true); // Set the editable state to true
        await handelStorePendingSecTaskDeatilsInContext(task); // Fetch task data asynchronously
        console.log("this is value for isEditable==>", isEditable);
        setOpenViewBox(!openViewDialog); // Open the dialog only after data fetching is complete
    }
    const handelStorePendingSecTaskDeatilsInContext = (task) => {

        setTaskData({

            taskTitle: task?.taskTitle,
            taskDate: task?.taskDate,
            taskInfo: task?.taskInfo
        });
    }







    return (
        <>
            {

                pathname === "/pending-task"
                    ?

                    (presentDate > date)
                        ?
                        // below some will give true if any one has not complete
                        data?.filter((task) =>
                            new Date(presentDate) > new Date(task.taskDate) && task.taskInfo?.some((info) => info.istaskCompleted === false))

                            .map(task => (



                                <TaskCardBox isMobile={isMobile}>
                                    <Box>Task date : {task?.taskDate}</Box>
                                    <Box className="btnAction">
                                        <CustomBtn
                                            variant="outlined"
                                            textColor="#ffedd5"
                                            bgColor="rgba(238, 242, 255, 0.14)"
                                            onClick={() => openDialogBoxForViewForPendingSec(task)}
                                        >
                                            View
                                        </CustomBtn>
                                    </Box>
                                </TaskCardBox>
                            ))


                        : null
                    :
                    // below code will run if path is not /pending-task
                    <TaskCardBox isMobile={isMobile}>
                        {/* <Box>{title}</Box> */}

                        <Box>Task date : {date}</Box>
                        <Box className="btnAction">
                            {
                                pathname === "/" ?
                                    <Box>
                                        <CustomBtn variant="outlined" textColor="#ffedd5" bgColor="rgba(238, 242, 255, 0.14)" onClick={openDialogBoxForEdit}>Edit</CustomBtn>
                                    </Box>
                                    : ""
                            }
                            <Box>
                                <CustomBtn
                                    variant="outlined"
                                    textColor="#ffedd5"
                                    bgColor="rgba(238, 242, 255, 0.14)"
                                    onClick={openDialogBoxForView}
                                >
                                    View
                                </CustomBtn>
                            </Box>
                            <Box>
                                <CustomBtn variant="outlined" textColor="#ffedd5" bgColor="rgba(238, 242, 255, 0.14)">Delete</CustomBtn>
                            </Box>
                        </Box>
                    </TaskCardBox>

            }

            {/* below code will run if path is not /pending-task */}





            {
                openEditDialog && <DialogBox isEditable={isEditable} setOpen={setOpen} perticulerTaskId={id} taskDataInContext={taskData} />
            }


            {
                openViewDialog && <TaskViewBox
                    setOpenViewBox={setOpenViewBox}
                    perticulerTaskId={id}
                    taskDataInContext={taskData} />
            }

        </>

    )
}

export default TaskSummary;