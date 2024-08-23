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
    console.log("All data from getall task api===>", data);
    console.log('====================================');

    return (
        <>

            <TopRightBtn openPopForAddTask={"Create task"} />
            {/* task info component */}
            <section>
                {
                    data?.map((task, index) => (
                        <TaskSummary id={task._id}
                            title={task?.taskTitle}
                            date={task?.taskDate}
                            key={index}
                            data={data} />
                        // console.log("this is task", task._id)
                    )
                    )
                }

            </section>
        </>
    )
}

export default AllTask