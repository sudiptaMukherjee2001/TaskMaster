'use client'
import React, { useEffect } from 'react'

import { usePathname } from 'next/navigation'
/* Stlyed component */
import { TaskCardBox } from '../style/TaskSummary.style';
import CustomBtn from './CustomBtn';
/* Mui import */
import { Box } from '@mui/material'
import { updateTaskReq } from '@/utils/updateTaskReq.js';


const TaskSummary = ({ id, title, date }) => {
    console.log("this is title==>", title);
    console.log("this is date==>", date);
    console.log("this is id==>", id);

    const pathname = usePathname();

    const handelupdateTaskReq = () => {
        updateTaskReq({ id })
        console.log("update task req called");
    }
    return (
        <TaskCardBox>
            <Box>{title}</Box>
            <Box>{date}</Box>
            <Box className="btnAction">
                {
                    pathname === "/" ?
                        <Box>
                            <CustomBtn variant="outlined" textColor="#ffedd5" bgColor="rgba(238, 242, 255, 0.14)" onClick={handelupdateTaskReq}>Edit</CustomBtn>
                        </Box>
                        : ""
                }
                <Box>
                    <CustomBtn variant="outlined" textColor="#ffedd5" bgColor="rgba(238, 242, 255, 0.14)">View</CustomBtn>
                </Box>
                <Box>
                    <CustomBtn variant="outlined" textColor="#ffedd5" bgColor="rgba(238, 242, 255, 0.14)">Delete</CustomBtn>
                </Box>
            </Box>
        </TaskCardBox>
    )
}

export default TaskSummary;