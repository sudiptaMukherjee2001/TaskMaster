import React from 'react'
/* Component import */
import TopRightBtn from '../components/TopRightBtn'
import TaskSummary from '../components/TaskSummary'
/* mui import */
import { Grid } from '@mui/material'
const CompletedTask = () => {
    return (
        <>
            <TopRightBtn openPopForAddTask={"Clear all"} />
            {/* task info component */}
            <section>
                <TaskSummary />
                <TaskSummary />
                <TaskSummary />
            </section>
        </>
    )
}

export default CompletedTask