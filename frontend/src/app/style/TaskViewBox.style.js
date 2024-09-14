import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TaskViewBoxCon = styled(Box)(({ theme }) => ({
    // border: "2px solid blue",
    position: "absolute",
    background: "white",
    color: "black",
    width: "60%", // Adjust width for better responsiveness
    height: "80%", // Adjust height
    overflow: "auto", // hide the overflow
    scrollbarWidth: "none",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", // This centers the box both horizontally and vertically
    padding: "1rem", // Add padding for content spacing
    boxSizing: "border-box", // Ensure padding is part of the total size
    borderRadius: "0.7rem",
    zIndex: 5,
    // Responsive design
    [theme.breakpoints.down('sm')]: {
        width: "90%", // Wider on smaller screens
        height: "60%", // Adjust height
        overflow: "auto", // hide the overflow
        scrollbarWidth: "none",
    },
    "& .task_Info": {
        // border: "2px solid red",
        display: "flex",

        alignItems: "center",
        columnGap: "1rem",
        marginBottom: "1.5rem",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            alignItems: "start"
        },
        "& .task_Info_value ": {
            // border: "2px solid red",
            backgroundColor: "rgb(108 108 108 / 21%)",
            paddingInline: "1rem",
            paddingBlock: "0.6rem",
            borderRadius: "9px",
            minWidth: "26%",
            [theme.breakpoints.down('sm')]: {
                flexDirection: "column",
                alignItems: "start",
                width: "100%"
            }
        }

    },
    "& .all_task": {

        border: "2px solid red",

        overflow: "auto",
        scrollbarWidth: "none",
        height: "56%",
        paddingBlock: '1rem',
        paddingInline: '1rem',
        "& .task_names": {
            display: "flex",

            alignItems: "center",
            columnGap: "0rem",
            marginBottom: "1rem",
            [theme.breakpoints.down('sm')]: {
                flexDirection: "row",
                alignItems: "start"
            },
            "& .tasks ": {
                // border: "2px solid red",
                backgroundColor: "rgb(108 108 108 / 21%)",
                paddingInline: "1rem",
                paddingBlock: "0.6rem",
                borderRadius: "9px"
            }

        }
    }
    ,
    "& .Btn_Sec": {
        border: "2px solid red",
        display: "flex",
        justifyContent: "end",
        position: "absolute",
        bottom: "0px",
        right: "0px",
        width: "100%"
    }

}));
