import React from 'react';
import { BootstrapDialog, CustomBox } from '../style/DialogBox.style';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, FormControl, TextField } from '@mui/material';
import CustomBtn from './CustomBtn';
import { Field, FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const DialogBox = ({ setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    };

    const validationSchema = yup.object({
        taskTitle: yup.string('Enter task title').required('Task title is required'),
        taskDate: yup.string('Select the date').required('Date is required'),
        taskName: yup.string('Enter task name').required('Task name is required'),
    });

    const formik = useFormik({
        initialValues: {
            taskTitle: '',
            taskDate: new Date(),
            taskName: '',
            toggle: false,
            priority: '',
        },
        validationSchema,
        onSubmit: (values) => {
            console.log("This is dialog box values:", values);
        },
    });

    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
            <FormikProvider value={formik}>
                <DialogContent >
                    <TextField
                        id="standard-basic"
                        variant="standard"
                        name='taskTitle'
                        fullWidth
                        placeholder='Task title'
                        value={formik.values.taskTitle}
                        onChange={formik.handleChange}
                        error={formik.touched.taskTitle && Boolean(formik.errors.taskTitle)}
                        helperText={formik.touched.taskTitle && formik.errors.taskTitle}
                    />

                    <DatePicker
                        selected={formik.values.taskDate}
                        dateFormat="MMMM d, yyyy"
                        name="taskDate"
                        className='form_control'
                        onChange={(date) => formik.setFieldValue('taskDate', date)}
                    />

                    <CustomBox>
                        <Box className="input_save_task_btn">
                            <TextField
                                id="standard-basic"
                                variant="standard"
                                fullWidth
                                placeholder='Enter your task'
                                name='taskName'
                                value={formik.values.taskName}
                                onChange={formik.handleChange}
                                error={formik.touched.taskName && Boolean(formik.errors.taskName)}
                                helperText={formik.touched.taskName && formik.errors.taskName}
                            />
                            <CustomBtn variant="outlined" textColor="#ffedd5" bgColor="#0f172a">Add task</CustomBtn>
                        </Box>
                        <Box className="task_con">
                            <Box className="task_with_check_box">
                                <section>
                                    <Field type="checkbox" name="toggle" />
                                    This is my first task
                                </section>

                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                    <Field as="select" name="priority">
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                </FormControl>
                            </Box>
                            <Box className="task_with_check_box">
                                <section>
                                    <Field type="checkbox" name="toggle" />
                                    This is my first task
                                </section>

                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                    <Field as="select" name="priority">
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                </FormControl>
                            </Box>
                            <Box className="task_with_check_box">
                                <section>
                                    <Field type="checkbox" name="toggle" />
                                    This is my first task
                                </section>

                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                    <Field as="select" name="priority">
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                </FormControl>
                            </Box>
                        </Box>
                    </CustomBox>
                </DialogContent>
            </FormikProvider>
            <DialogActions>
                <CustomBtn variant="outlined" onClick={handleClose} textColor="#ffedd5" bgColor="#0f172a">Close</CustomBtn>
                <CustomBtn variant="outlined" textColor="#ffedd5" bgColor="#0f172a" onClick={formik.handleSubmit}>Save task</CustomBtn>
            </DialogActions>
        </BootstrapDialog>
    );
}

export default DialogBox;
