'use client'
import React, { useEffect, useState } from 'react'
/* chart js import */
import { Pie, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS, ArcElement, CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Chartcontainer, DisplayChartPage, TaskAnalysis, TaskAnalysisBox } from '../style/chartcontainer.style.js';
/* mui import */
import { Box, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
/* utily func import */
import { dataFetchingForAnalysisPage, useTaskAnalysis } from '@/utils/dataFetchingForAnalysisPage.js';
import { Bardata, Baroptions, Piedata } from '@/utils/dataSet.js';
/*  component import */
import CustomBtn from '../components/CustomBtn.jsx';
const page = () => {
    // ChartJS.register(ArcElement, Tooltip);
    const [OpenChartPage, setOpenChartPage] = useState(false);
    const [BarchartData, setChartData] = useState([])
    const [PiechartData, setPieChartData] = useState([]);
    ChartJS.register(ArcElement, CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend);

    const fetchedDetailsForAnalysis = useTaskAnalysis();
    // console.log("Inside comp==>", fetchedDetailsForAnalysis)

    const handelOpenAnalysisPage = (index) => {
        // console.log("this is index press", index)

        setOpenChartPage(!OpenChartPage);
        const filteredDetails = fetchedDetailsForAnalysis?.filter((taskCount, taskCountIndex) => taskCountIndex === index);
        // console.log("filteredDetails==>", filteredDetails)
        filteredDetails?.map((taskStats) => (
            setChartData(
                [taskStats.priority.High,
                taskStats.priority.medium,
                taskStats.priority.low,
                taskStats.priority.none
                ]
            ),
            setPieChartData(
                [
                    taskStats.TotalCompletionTask.TotalTask,
                    taskStats.TotalCompletionTask.CompletionTask
                ]
            )

        ))
    }
    // console.log("this is map data==>", filteredDetails);


    // console.log("chartData==>", BarchartData);


    // /* I have to create  one func that will sort the date if we have a same date on fetchedDetailsForAnalysis  suppose if we have 9-10-2024 two time .. then we have diplay one time*/
    console.log('====================================');
    console.log("Data==>    ", fetchedDetailsForAnalysis);
    console.log('====================================');
    let uniqueSortedDates = [];
    fetchedDetailsForAnalysis?.map((task) => {
        console.log("task==>", task.date);
        if (!uniqueSortedDates.includes(task.date)) {
            uniqueSortedDates.push(task.date)
        }
    })
    console.log('====================================');
    console.log("uniqueSortedDates==>", uniqueSortedDates);
    console.log('====================================');
    return (
        !OpenChartPage ?
            <Grid container spacing={2} border={"2px solid pink"}>
                {/* Each Grid item is a separate task box */}
                {
                    uniqueSortedDates?.map((analytics, index) => {
                        return (
                            <Grid item xs={12} sm={6} md={4}>
                                <TaskAnalysisBox>
                                    <Box className="task_date">
                                        Task Date: {analytics}
                                    </Box>
                                    <Box className="lower_box">
                                        <CustomBtn
                                            bgColor={"#ffeddd"}
                                            textColor="rgba(0, 0, 0, 0.8)"
                                            fontWeight='900'
                                            onClick={() => handelOpenAnalysisPage(index)}
                                        >
                                            Analyze
                                        </CustomBtn>
                                    </Box>


                                </TaskAnalysisBox>

                            </Grid>
                        )
                    })

                }



            </Grid> :

            <DisplayChartPage>
                <Box className="icon_box">
                    <CloseIcon onClick={handelOpenAnalysisPage} />
                </Box>
                <div >
                    <Pie style={{ height: "300px" }} data={{
                        labels: ['Total task', 'Completed task'],
                        datasets: [{

                            data: PiechartData,

                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(255, 205, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(201, 203, 207, 0.2)',
                                'rgba(1, 32, 2, 0.2)'
                            ],
                            borderColor: [
                                'rgb(255, 99, 132)',
                                'rgb(255, 159, 64)',
                                'rgb(255, 205, 86)',
                                'rgb(75, 192, 192)',
                                'rgb(54, 162, 235)',
                                'rgb(153, 102, 255)',
                                'rgb(201, 203, 207)'
                            ],

                            //x`  borderWidth: 1
                        }]
                    }} options={{ maintainAspectRatio: false }} />
                </div>
                <div >
                    <Bar style={{ height: "300px" }} data={
                        {
                            labels: ['High', 'Medium', 'Low', 'none'],
                            datasets: [{
                                label: 'Number of task per priority',
                                data: BarchartData
                                ,
                                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                borderColor: 'rgba(75, 192, 192, 1)',
                                borderWidth: 1
                            }]
                        }
                    } options={{ maintainAspectRatio: false }} />
                </div>
            </DisplayChartPage>

    )
}


export default page

