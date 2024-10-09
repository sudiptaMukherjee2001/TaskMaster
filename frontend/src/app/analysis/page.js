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
    const [chartData, setChartData] = useState([])
    ChartJS.register(ArcElement, CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend);

    const fetchedDetailsForAnalysis = useTaskAnalysis();
    console.log("Inside comp==>", fetchedDetailsForAnalysis)
    let priorities;
    const OpenAnalysisPage = (index) => {
        console.log("this is index press", index)

        setOpenChartPage(!OpenChartPage);
        const filteredDetails = fetchedDetailsForAnalysis?.filter((taskCount, taskCountIndex) => taskCountIndex === index)
        console.log("filteredDetails==>", filteredDetails)
        priorities = filteredDetails?.map((taskCount) => (
            setChartData(
                [taskCount.priority.High,
                taskCount.priority.medium,
                taskCount.priority.low,
                taskCount.priority.none
                ]
            )

        ))
        console.log("this is map data==>", filteredDetails);
    }

    console.log("chartData==>", chartData);


    return (
        !OpenChartPage ?
            <Grid container spacing={2} border={"2px solid pink"}>
                {/* Each Grid item is a separate task box */}
                {
                    fetchedDetailsForAnalysis?.map((analytics, index) => {
                        return (
                            <Grid item xs={12} sm={6} md={4}>
                                <TaskAnalysisBox>
                                    <Box className="task_date">
                                        Task Date: {analytics.date}
                                    </Box>
                                    <Box className="lower_box">
                                        <CustomBtn
                                            bgColor={"#ffeddd"}
                                            textColor="rgba(0, 0, 0, 0.8)"
                                            fontWeight='900'
                                            onClick={() => OpenAnalysisPage(index)}
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
                    <CloseIcon onClick={OpenAnalysisPage} />
                </Box>
                <div >
                    <Pie style={{ height: "300px" }} data={Piedata} options={{ maintainAspectRatio: false }} />
                </div>
                <div >
                    <Bar style={{ height: "300px" }} data={
                        {
                            labels: ['High', 'Medium', 'Low', 'none'],
                            datasets: [{
                                label: 'Number of task per priority',
                                data: chartData
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


{/* */ }