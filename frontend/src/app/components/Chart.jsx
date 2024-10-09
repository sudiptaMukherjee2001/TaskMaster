import { dataSet } from "../../utils/dataSet.js";
export const config = {
    type: 'bar',
    data: dataSet,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
}