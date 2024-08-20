import React, { useState } from 'react';
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
import { createTaskReq } from '@/utils/createTaskReq';

const DialogBox = ({ setOpen }) => {

    const handleClose = () => {
        setOpen(false);
    };

    const validationSchema = yup.object({
        taskTitle: yup.string('Enter task title').required('Task title is required'),
        taskDate: yup.string('Select the date').required('Date is required'),
        taskname: yup.string('Enter task name').required('Task name is required'),
    });


    /* Whatever field name we have given while making our model same name we should give in initialvalue also... it is  mandatoryy */
    const formik = useFormik({
        initialValues: {
            taskTitle: '',
            taskDate: new Date().toLocaleDateString(),
            taskInfo: [],
        },
        validationSchema,
        onSubmit: (values) => {
            createTaskReq(values)
            console.log("This is dialog box values:", values);
        },
    });

    const handelAddTask = () => {
        formik.setFieldValue("taskInfo", [
            ...formik.values.taskInfo,
            { id: formik.values.taskInfo.length + 1, taskname: formik.values.taskname, istaskCompleted: false }
        ])
    }

    const handleToggleChange = (id) => {
        const updatedTasks = formik.values.taskInfo.map(task => {
            return task.id === id ? { ...task, istaskCompleted: !task.istaskCompleted } : task
        }
        );
        formik.setFieldValue("taskInfo", updatedTasks);
    };

    const handlePriorityChange = (id, value) => {
        console.log("this is selected value==>", value);

        const updatePriority = formik.values.taskInfo.map((task) => {
            return (
                task.id === id ? { ...task, taskPriority: value } : task
            )
        })
        formik.setFieldValue("taskInfo", updatePriority);
    }


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
                                name='taskname'
                                value={formik.values.taskInfo.taskname}
                                onChange={formik.handleChange}
                                error={formik.touched.taskname && Boolean(formik.errors.taskname)}
                                helperText={formik.touched.taskname && formik.errors.taskname}


                            />
                            <CustomBtn variant="outlined" textColor="#ffedd5" bgColor="#0f172a" onClick={handelAddTask}>Add task</CustomBtn>
                        </Box>
                        <Box className="task_con">
                            {
                                formik.values?.taskInfo?.map((taskInfo, index) => {
                                    return (
                                        <Box className="task_with_check_box" key={taskInfo?.id}>
                                            <section>
                                                <Field type="checkbox"
                                                    name={`istaskCompleted`}
                                                    onChange={() => handleToggleChange(taskInfo?.id)}
                                                    checked={taskInfo?.istaskCompleted}
                                                />
                                                {taskInfo?.taskname}
                                            </section>

                                            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                                <Field as="select"
                                                    name={`taskPriority`}
                                                    value={formik.values.taskInfo.taskPriority}
                                                    onChange={(e) => handlePriorityChange(taskInfo?.id, e.target.value)}

                                                >
                                                    <option value="">Choose Priority</option>
                                                    <option value="High">High</option>
                                                    <option value="Medium">Medium</option>
                                                    <option value="Low">Low</option>
                                                </Field>
                                            </FormControl>
                                        </Box>


                                    )
                                })


                            }

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
