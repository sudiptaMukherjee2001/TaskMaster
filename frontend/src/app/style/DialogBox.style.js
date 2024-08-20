import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';


export const BootstrapDialog = styled(Dialog)(({ theme }) => ({

    '& .MuiDialog-container ': {
        display: "block !important",
        margin: "2rem auto 0px auto"
    },

    '& .MuiDialog-paper': {
        // border: "2px solid red",
        margin: "auto",
    },

    '& .Mui-error .MuiOutlinedInput-notchedOutline': {
        borderWidth: "1.3px",
        borderColor: '#1e293b !important',

    }
    ,
    "& .MuiInputBase-root": {
        marginBottom: "1rem",
        "&::before": {
            content: "''",
            borderBottom: "1.5px solid rgba(0, 0, 0, 0.42) !important",
        },
        "&::after": {
            content: "''",
            borderBottom: "none"
        },

    },


    "& .form_control": {
        borderWidth: "1.3px",
        borderColor: '#1e293b !important',
        marginBottom: "1rem",
        paddingBlock: "0.6rem",
        paddingLeft: "0.3rem",
        borderRadius: "0.1rem"

    }



}));

export const CustomBox = styled(Box)({
    "& .input_save_task_btn": {
        display: "flex",
        justifyContent: "space-between",
        "& .MuiInputBase-root": {
            marginBottom: "0rem",
        },
        "& .MuiTextField-root": {
            width: "70%",
            "& .MuiInputBase-root": {
                width: "100%"
            },
        }
    },
    "& .task_con": {
        border: "2px solid red",
        display: "flex",
        flexDirection: "column",
        height: "30vh",
        overflow: "auto",
        scrollbarWidth: "none",
        marginTop: "1rem",
        "& .task_with_check_box": {
            paddingInline: "0.3rem",
            // border: "2px solid ",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            "& .MuiInputBase-root": {
                marginBottom: "0rem"
            }
        }
    }
})