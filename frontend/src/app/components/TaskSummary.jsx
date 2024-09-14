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


const TaskSummary = ({ id, title, date }) => {
    const [openEditDialog, setOpen] = useState(false);
    const [openViewDialog, setOpenViewBox] = useState(false);
    const [isEditable, setEditable] = useState(false);
    const { taskData, setTaskData } = useTaskContext()
    const { isMobile } = useResponsive();


    // console.log("this is date==>", date);

    const pathname = usePathname();



    /* this handelupdateTaskReq func will open the dialog box for editing */
    const handelupdateTaskReq = async () => {
        const fetchPerticularTaskInfo = await getPerticularTask(id);
        // console.log("fetched perticular task", fetchPerticularTaskInfo);
        setTaskData({
            taskTitle: fetchPerticularTaskInfo?.taskTitle,
            taskDate: fetchPerticularTaskInfo?.taskDate,
            taskInfo: fetchPerticularTaskInfo?.taskInfo
        });
    }

    const openDialogBoxForEdit = async () => {
        setEditable(true); // Set the editable state to true
        await handelupdateTaskReq(); // Fetch task data asynchronously
        console.log("this is value for isEditable==>", isEditable);
        setOpen(!openEditDialog); // Open the dialog only after data fetching is complete
    }

    /* Dialog box for View */
    const openDialogBoxForView = async () => {
        setEditable(true); // Set the editable state to true
        await handelupdateTaskReq(); // Fetch task data asynchronously
        console.log("this is value for isEditable==>", isEditable);
        setOpenViewBox(!openViewDialog); // Open the dialog only after data fetching is complete
    }


    return (
        <>
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