import React from 'react'
/* Component import */
import TopRightBtn from '../components/TopRightBtn'
import TaskSummary from '../components/TaskSummary'
/* mui import */
import { Grid } from '@mui/material'
import { getAllTask } from '@/utils/getAllTask.js'
const CompletedTask = async () => {
    const data = await getAllTask();

    return (
        <>
            <TopRightBtn openPopForAddTask={"Clear all"} />
            {/* task info component */}
            <section>
                {
                    data?.map((task, index) => (
                        <TaskSummary id={task._id} title={task?.taskTitle} date={task?.taskDate} key={index} />
                    )
                    )
                }

            </section>
        </>
    )
}

export default CompletedTask