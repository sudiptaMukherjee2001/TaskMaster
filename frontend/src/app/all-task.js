import React from 'react'
/* Component import */
import TopRightBtn from './components/TopRightBtn'
import TaskSummary from './components/TaskSummary'
/* mui import */

/* api req func import */
import { getAllTask } from "@/utils/getAllTask.js";


const AllTask = async () => {
    const data = await getAllTask();
    console.log('====================================');
    console.log(data);
    console.log('====================================');

    return (
        <>

            <TopRightBtn openPopForAddTask={"Create task"} />
            {/* task info component */}
            <section>
                {
                    data.map((task, index) => (
                        <TaskSummary title={task?.taskTitle} date={task?.taskDate} key={index} />
                    )
                    )
                }

            </section>
        </>
    )
}

export default AllTask