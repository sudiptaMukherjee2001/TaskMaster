import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
export const TaskAnalysisBox = styled(Box)(({ theme }) => ({


    // width: "100%",
    // margin: "20px 0",
    border: "1.2px solid #fca5a5",
    borderRadius: "0.2rem",
    paddingBlock: "0.8rem",
    paddingInline: "0.4rem",
    "& .task_date": {


    },
    "& .lower_box": {
        border: "2px solid red",
        display: "flex",
        justifyContent: "end",
        marginTop: "0.4rem"


    }
}));

export const DisplayChartPage = styled(Box)(({ theme }) => ({
    border: "2px solid yellow",
    position: "relative",
    "& .icon_box": {
        position: "absolute",
        right: "0px",
        border: "2px solid red"
    }
}))