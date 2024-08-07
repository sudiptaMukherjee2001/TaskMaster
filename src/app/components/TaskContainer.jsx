'use client'
import React from 'react'
/* styled component */
import { TaskCon } from '../style/TaskContainer.style'

const TaskContainer = ({ children, border, display }) => {
    return (
        <TaskCon border={border} display={display}>{children}</TaskCon>
    )
}

export default TaskContainer