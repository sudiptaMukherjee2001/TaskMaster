"use client"
import React, { useState } from 'react';
import { BootstrapDialog, CustomBox } from '../style/DialogBox.style';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, FormControl, FormHelperText, TextField } from '@mui/material';
import CustomBtn from './CustomBtn';
import { Field, FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { createTaskReq } from '@/utils/createTaskReq';
import { format } from 'date-fns';
import { updateTaskReq } from '@/utils/updateTaskReq';
const DialogBox = ({ setOpen, isEditable, perticulerTaskId, taskDataInContext }) => {
    console.log('====================================');
    console.log("taskDataInContext==>", taskDataInContext);
    console.log('====================================');

    const handleClose = () => {
        setOpen(false);

    };

    // Validation schema for creating a new task
    const createTaskValidationSchema = yup.object({
        taskTitle: yup.string('Enter task title').required('Task title is required'),
        taskDate: yup.string('Select the date').required('Date is required'),
        taskname: yup.string('Enter task name').required('Task name is required'),
    });

    // Validation schema for updating an existing task
    const updateTaskValidationSchema = yup.object({
        taskTitle: yup.string('Enter task title').optional(),
        taskDate: yup.string('Select the date').optional(),
        taskname: yup.string('Enter task name').optional(),
        eachTask: yup.string().optional()
    });

    const validationSchema = isEditable ? updateTaskValidationSchema : createTaskValidationSchema;


    /* Whatever field name we have given while making our model same name we should give in initialvalue also... it is  mandatoryy */
    const formik = useFormik({
        initialValues: {
            /* taskTitle: '',
            taskDate: format(new Date(), 'MMM d yyyy'),
            taskInfo: [], */
            taskTitle: isEditable ? taskDataInContext.taskTitle : '',
            taskDate: isEditable ? taskDataInContext.taskDate : format(new Date(), 'MMM d yyyy'),

            taskInfo: isEditable ? taskDataInContext.taskInfo : [],

        },
        validationSchema,
        onSubmit: async (values) => {
            // Debugging: Check if `isEditable` is set correctly
            console.log('isEditable:', isEditable);
            try {
                values.taskDate = format(values.taskDate, 'MMM d yyyy'); // Ensure the selected date is formatted consistently
                console.log('Task Data:', values);
                if (isEditable) {
                    console.log('====================================');
                    console.log("indside isEditable", isEditable);
                    console.log('====================================');
                    await updateTaskReq(perticulerTaskId, values);
                    alert("Task updated successfully!");
                } else {

                    await createTaskReq(values);
                }
                // console.log("This is dialog box values:", values);
                // You can also add logic to handle success, such as showing a success message
            } catch (error) {
                console.error("Failed to create task:", error);
                // Handle errors, e.g., show an error message
            }
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
        // console.log("this is selected value==>", value);

        const updatePriority = formik.values.taskInfo.map((task) => {
            return (
                task.id === id ? { ...task, taskPriority: value } : task
            )
        })
        formik.setFieldValue("taskInfo", updatePriority);
    }

    console.log("taskDataInContext.taskInfo==>", taskDataInContext?.taskInfo);

    /* Fetched the perticular task infor by id for editing */



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
                            {
                                !isEditable &&
                                <>
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
                                </>
                            }
                        </Box>
                        <Box className="task_con">
                            {
                                formik.values?.taskInfo?.map((taskInfo, index) => {
                                    console.log("inside taskinfo==>==>>", taskInfo);

                                    return (
                                        <Box className="task_with_check_box" key={taskInfo?.id}>
                                            <section>
                                                {/*  <Field type="checkbox"
                                                    name={`istaskCompleted`}
                                                    onChange={() => handleToggleChange(taskInfo?.id)}
                                                    checked={taskInfo?.istaskCompleted}
                                                /> */}
                                                {isEditable ?
                                                    <TextField
                                                        id="standard-basic"
                                                        variant="standard"
                                                        fullWidth
                                                        placeholder='Enter your task'
                                                        name={`taskInfo[${index}].taskname`}  // Reference the specific task's name in the array
                                                        value={formik.values.taskInfo[index]?.taskname}  // Bind to the correct array index
                                                        onChange={formik.handleChange}
                                                        error={formik.touched.taskInfo?.[index]?.taskname && Boolean(formik.errors.taskInfo?.[index]?.taskname)}
                                                        helperText={formik.touched.taskInfo?.[index]?.taskname && formik.errors.taskInfo?.[index]?.taskname}

                                                    />
                                                    : taskInfo?.taskname
                                                }

                                            </section>
                                            {!isEditable &&
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
                                            }


                                        </Box>


                                    )
                                })


                            }

                        </Box>
                    </CustomBox>
                </DialogContent>
            </FormikProvider>
            <DialogActions>
                <CustomBtn variant="outlined" onClick={handleClose} textColor="#ffedd5" bgColor="#0f172a" >Close</CustomBtn>
                <CustomBtn variant="outlined" textColor="#ffedd5" bgColor="#0f172a" onClick={formik.handleSubmit}>
                    {
                        isEditable ? "Save task" : " Create task"
                    }
                </CustomBtn>
            </DialogActions>
        </BootstrapDialog>
    );
}

export default DialogBox;
