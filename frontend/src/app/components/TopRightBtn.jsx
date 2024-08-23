'use client'
import React from 'react'
/* style import */
import { TopBox } from '../style/TopRightBtn.style'
/* mui import */
import { Box, Button } from '@mui/material'
import DialogBox from './DialogBox'
import CustomBtn from './CustomBtn'

const TopRightBtn = ({ openPopForAddTask }) => {
    const [open, setOpen] = React.useState(false);
    const handelFunc = () => {
        setOpen(!open);
        /*   
        no needed
        if (openPopForAddTask === "Create task") {
            setOpen(!open);
              console.log("inside if");
          }
          if (openPopForAddTask === "Clear all") {
              console.log("inside if");
              setOpen(!open);
          } */
    }
    return (
        <>
            <TopBox>
                <CustomBtn variant="outlined" onClick={handelFunc} textColor="#ffedd5" bgColor="rgba(238, 242, 255, 0.14)">{openPopForAddTask}</CustomBtn>
            </TopBox>
            {
                open && <DialogBox setOpen={setOpen} />
            }
        </>
    )
}

export default TopRightBtn