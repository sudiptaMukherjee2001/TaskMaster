import React from 'react';
/* style import */
import { BootstrapDialog, CustomBox } from '../style/DialogBox.style';
/* mui import */
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Checkbox from '@mui/material/Checkbox';
import dayjs from 'dayjs';
import { Box } from '@mui/material';

import CustomBtn from './CustomBtn';


const DialogBox = ({ setOpen }) => {
    const [value, setValue] = React.useState(dayjs('yyyy-mon-date'));
    const [checked, setChecked] = React.useState(true);
    const handleClose = () => {
        setOpen(!open);
    };

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                {/* <DialogTitle id="alert-dialog-title" className='test'> */}
                <TextField id="standard-basic" variant="standard" fullWidth placeholder='Task title' />
                {/* </DialogTitle> */}
                {/* <DialogContent > */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker

                            value={value}
                            onChange={(newValue) => setValue(newValue)}
                        />
                    </DemoContainer>
                </LocalizationProvider>

                <CustomBox>
                    <Box className="input_save_task_btn">
                        <TextField id="standard-basic" variant="standard" fullWidth placeholder='Enter your task' />
                        <CustomBtn variant="outlined" textColor="#ffedd5" bgColor="#0f172a">plus icon</CustomBtn>

                    </Box>
                    <Box className="task_con">
                        <Box className="task_with_check_box">
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            This is my firt task
                        </Box>
                        <Box className="task_with_check_box">
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            This is my firt task
                        </Box>
                        <Box className="task_with_check_box">
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            This is my firt task
                        </Box>
                        <Box className="task_with_check_box">
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            This is my firt task
                        </Box>
                        <Box className="task_with_check_box">
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            This is my firt task
                        </Box>
                        <Box className="task_with_check_box">
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            This is my firt task
                        </Box>
                        <Box className="task_with_check_box">
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            This is my firt task
                        </Box>
                        <Box className="task_with_check_box">
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            This is my firt task
                        </Box>
                        <Box className="task_with_check_box">
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            This is my firt task
                        </Box>
                        <Box className="task_with_check_box">
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            This is my firt task
                        </Box>
                    </Box>
                </CustomBox>
                {/* </DialogContent> */}
                {/* <DialogContent > */}

                {/* </DialogContent> */}
                <DialogActions>
                    <CustomBtn variant="outlined" onClick={handleClose} textColor="#ffedd5" bgColor="#0f172a">close</CustomBtn>
                    <CustomBtn variant="outlined" textColor="#ffedd5" bgColor="#0f172a">Save task</CustomBtn>

                </DialogActions>
            </BootstrapDialog >

        </>



    )
}

export default DialogBox