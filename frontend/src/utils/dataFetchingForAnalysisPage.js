'use client'
import { useEffect, useState } from "react";
import { getAllTask } from "./getAllTask.js";

export const useTaskAnalysis = () => {
    const [analysisData, setAnalysisData] = useState(null);
    const [taskDataSummary, setTaskDataSummary] = useState();

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
                console.log("this is the lenght", info?.taskInfo.length);
                const taskDate = info?.taskDate;
                if (!statusOfTaskCompletion[taskDate]) {
                    statusOfTaskCompletion[taskDate] = { TotalTask: 0, CompletionTask: 0 };
                }


                // finding total task for each date
                statusOfTaskCompletion[taskDate].TotalTask += info?.taskInfo.length;


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
                    //calculate the how many task are Completed
                    if (task?.istaskCompleted === true) {
                        statusOfTaskCompletion[taskDate].CompletionTask += 1;
                    }

                });




                // console.log("============================")
                // console.log("statusOfTaskCompletion==>", statusOfTaskCompletion)
                // console.log("============================")

            });
            setTaskDataSummary(() => {
                return {
                    priorityData: priorityCount,
                    completionData: statusOfTaskCompletion
                }
            });
        }
    }, [analysisData])
    console.log("--------------------------------------");
    console.log("analysisData:", analysisData);
    console.log("--------------------------------------");
    console.log("--------------------------------------");
    console.log("taskDataSummary:", taskDataSummary);
    console.log("--------------------------------------");

    //extract the priority
    const analysisStat = analysisData?.map((info) => {
        // console.log("info.taskInfo==>", info.taskInfo)
        return {
            date: info?.taskDate,
            priority: taskDataSummary ? taskDataSummary.priorityData[info?.taskDate] : { high: 0, medium: 0, low: 0, none: 0 },
            TotalCompletionTask: taskDataSummary ? taskDataSummary.completionData[info?.taskDate] : { TotalTask: 0, CompletionTask: 0 },

        }


    })


    /* THIS taskInfoArr  IS THE FINAL DATA THAT WE WILL USE FOR THE CHART */
    /* this analysisStat will give how manyn task are there in each priority and how many task are completed on a perticular date */
    console.log("taskInfoArr retruned==>", analysisStat)// ['High', 'Medium', 'High', 'Low', 'false']

    return analysisStat;
}
// console.log("fetchedData:", fetchedData);
export const labelArr = ['High', 'Medium', 'Low', 'none'] // Add labels here

