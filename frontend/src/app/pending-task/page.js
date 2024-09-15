'use client'
import React from 'react'
/* Component import */
import TopRightBtn from '../components/TopRightBtn'
import TaskSummary from '../components/TaskSummary'
/* mui import */
import { getAllTask } from '@/utils/getAllTask.js'
import { format } from 'date-fns';
const PendingTaskPage = async () => {
    const data = await getAllTask();
    const presentDate = format(new Date(), 'MMM d yyyy');
    console.log("today's date==>", presentDate);

    return (
        <>
            <TopRightBtn openPopForAddTask={"Clear all"} />
            {/* task info component */}
            <section>
                {
                    data?.map((task, index) => (
                        <TaskSummary data={data} id={task._id} title={task?.taskTitle} date={task?.taskDate} key={index} presentDate={presentDate} />

                    )
                    )
                }

            </section>
        </>
    )
}

export default PendingTaskPage