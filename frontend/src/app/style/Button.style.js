import { styled } from '@mui/material/styles';
import { Button } from '@mui/material'
export const CustomButton = styled(Button)(({ Fontcolor, bgColor }) => ({


    color: `${Fontcolor}`,
    backgroundColor: bgColor,
    border: "1.2px solid #fca5a5",
    paddingInline: "1.3rem",
    fontFamily: "Rubik, cursive",
    fontWeight: 500,
    "&:hover": {
        border: "1.2px solid #fca5a5",
        color: `${Fontcolor}`,
        backgroundColor: bgColor
    }



}))