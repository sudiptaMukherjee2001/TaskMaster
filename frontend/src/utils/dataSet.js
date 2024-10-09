import { dataFetchingForAnalysisPage, labelArr, useTaskAnalysis } from "./dataFetchingForAnalysisPage.js";


const label = ['Total task', 'Completed task'] // Add labels here
export const Piedata = {
    labels: label,
    datasets: [{

        data: [5, 3],

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
};
let fetchedDetailsForAnalysis;




export const Bardata =




    console.log("Inside dataset==>", fetchedDetailsForAnalysis)
