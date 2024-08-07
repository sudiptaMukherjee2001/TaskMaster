import React from 'react'
/* Component import */
import TopRightBtn from '../components/TopRightBtn'
import TaskSummary from '../components/TaskSummary'
/* mui import */
import { Grid } from '@mui/material'
import TaskContainer from '../components/TaskContainer'

const AllTask = () => {
    return (
        <>

            <TopRightBtn openPopForAddTask={"Add task"} />
            {/* task info component */}
            <TaskContainer border="true" display="true">
                <TaskSummary />
                <TaskSummary />
                <TaskSummary />
            </TaskContainer>



        </>
    )
}

export default AllTask