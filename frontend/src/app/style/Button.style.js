import { styled } from '@mui/material/styles';
import { Button } from '@mui/material'
export const CustomButton = styled(Button)(({ theme, fontcolor, bgcolor, width }) => ({


    color: `${fontcolor}`,
    backgroundColor: bgcolor,
    border: "1.2px solid #fca5a5",
    paddingInline: "1.3rem",
    fontFamily: "Rubik, cursive",
    fontWeight: 500,
    width: `${width ? "20%" : ''}`,
    [theme.breakpoints.down('sm')]: {
        width: `${width ? "40%" : ''}`
    },
    "&:hover": {
        border: "1.2px solid #fca5a5",
        color: `${fontcolor}`,
        backgroundColor: bgcolor
    }



}))