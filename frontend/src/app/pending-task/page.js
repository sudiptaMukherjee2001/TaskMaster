'use client'
import React, { useEffect, useState } from 'react'
/* Component import */
import TopRightBtn from '../components/TopRightBtn'
import TaskSummary from '../components/TaskSummary'
/* mui import */
import { getAllTask } from '@/utils/getAllTask.js'
import { format } from 'date-fns';
const PendingTaskPage = () => {
    const [Data, setData] = useState();
    const presentDate = format(new Date(), 'MMM d yyyy');
    useEffect(() => {
        // Fetch data once when the component mounts
        const fetchData = async () => {
            const data = await getAllTask();
            setData(data)

            console.log("Data fetched:", data);
        };

        fetchData();
    }, []);
    console.log("Data fetched outside:", Data);



    return (
        <>
            <TopRightBtn openPopForAddTask={"Clear all"} />
            {/* task info component */}
            {

            }
            <section>
                {
                    Data?.filter((task) => (new Date(presentDate) > new Date(task?.taskDate))).map((task, taskIndex) => {
                        console.log("result tasskinfo", task)
                        const hasIncompleteTask = task.taskInfo?.some((result) => !result.istaskCompleted);
                        console.log("is not complete==>", hasIncompleteTask)


                        if (hasIncompleteTask) {
                            return (
                                <TaskSummary
                                    id={task._id}
                                    title={task?.taskTitle}  // taskTitle from the parent task
                                    date={task?.taskDate}    // taskDate from the parent task
                                    key={taskIndex}          // Make sure key is unique
                                />
                            );
                        }
                    })

                }





            </section>
        </>
    )
}

export default PendingTaskPage

// .map((task, index) => {
//     return (
//         <TaskSummary id={task._id} title={task?.taskTitle} date={task?.taskDate} key={index} />
//     )
// })