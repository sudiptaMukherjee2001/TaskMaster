'use client'
import React, { useEffect } from 'react'

import { usePathname } from 'next/navigation'
/* Stlyed component */
import { TaskCardBox } from '../style/TaskSummary.style';
import CustomBtn from './CustomBtn';
/* Mui import */
import { Box } from '@mui/material'


const TaskSummary = () => {
    const pathname = usePathname();


    return (
        <TaskCardBox>
            <Box>Task title</Box>
            <Box>8-08-2024</Box>
            <Box className="btnAction">
                {
                    pathname === "/" ?
                        <Box>
                            <CustomBtn variant="outlined" textColor="#ffedd5" bgColor="rgba(238, 242, 255, 0.14)">Edit</CustomBtn>
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