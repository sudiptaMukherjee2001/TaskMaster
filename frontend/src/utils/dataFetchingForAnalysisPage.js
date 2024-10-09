'use client'
import { useEffect, useState } from "react";
import { getAllTask } from "./getAllTask.js";

export const useTaskAnalysis = () => {
    const [analysisData, setAnalysisData] = useState(null);
    const [taskPriorityNum, setTaskPriorityNum] = useState();

    // Fetch data on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await getAllTask();
                console.log("Fetched Data:", fetchedData);
                setAnalysisData(fetchedData); // Store the fetched data in the state
            } catch (error) {
                console.error("Error fetching analysis data:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this effect runs once on mount


    useEffect(() => {
        if (analysisData) {
            // Extract the priority
            const priorityCount = {};
            const statusOfTaskCompletion = {};


            analysisData.map((info, index) => {
                // console.log("analysisData  taskdcss:", info?.taskInfo.length);
                const taskDate = info?.taskDate;
                if (!statusOfTaskCompletion[taskDate]) {
                    statusOfTaskCompletion[taskDate] = { TotalTask: 0, CompletionTask: 0 };
                }
                // finding total task for each date
                const len = info?.taskInfo.length;

                statusOfTaskCompletion[taskDate]?.TotalTask += len;


                info?.taskInfo.map((task, index) => {
                    // console.log("this is task related data==>", task);

                    const taskDate = info?.taskDate;
                    // Initialize priority counts for each date only if it doesn't already exist
                    if (!priorityCount[taskDate]) {
                        priorityCount[taskDate] = { High: 0, medium: 0, low: 0, none: 0 };
                    }
                    if (task?.taskPriority == "High") {

                        priorityCount[taskDate].High += 1;
                    } else if (task?.taskPriority == "Medium") {
                        priorityCount[taskDate].medium += 1;
                    } else if (task?.taskPriority == "Low") {
                        priorityCount[taskDate].low += 1;
                    } else {
                        priorityCount[taskDate].none += 1;
                    }
                });
                console.log("============================")
                console.log("statusOfTaskCompletion==>", statusOfTaskCompletion)
                console.log("============================")

            });
            setTaskPriorityNum(() => {
                return { ...priorityCount }
            });
        }
    }, [analysisData])
    console.log("--------------------------------------");
    console.log("analysisData:", analysisData);
    console.log("--------------------------------------");

    //extract the priority
    const taskInfoArr = analysisData?.map((info) => {
        // console.log("info.taskInfo==>", info.taskInfo)
        return {
            date: info?.taskDate,
            priority: taskPriorityNum ? taskPriorityNum[info?.taskDate] : { high: 0, medium: 0, low: 0, none: 0 }
        }


    })


    // console.log("taskInfoArr retruned==>", taskInfoArr)// ['High', 'Medium', 'High', 'Low', 'false']

    return taskInfoArr;
}
// console.log("fetchedData:", fetchedData);
export const labelArr = ['High', 'Medium', 'Low', 'none'] // Add labels here

