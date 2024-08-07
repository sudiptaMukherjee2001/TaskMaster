import React from 'react'
/* Component import */
import TopRightBtn from '../components/TopRightBtn'
import TaskSummary from '../components/TaskSummary'
/* mui import */
import { Grid } from '@mui/material'
import TaskContainer from '../components/TaskContainer'
const CompletedTask = () => {
    return (
        <>
            <TopRightBtn openPopForAddTask={"Clear all"} />
            {/* task info component */}
            <TaskContainer border="true" display="true">
                <TaskSummary />
                <TaskSummary />
                <TaskSummary />
            </TaskContainer>
        </>
    )
}

export default CompletedTask