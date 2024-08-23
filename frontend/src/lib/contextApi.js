"use client"
import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [taskData, setTaskData] = useState({
        taskTitle: '',
        taskDate: '',
        taskInfo: []
    });
    return (
        <TaskContext.Provider value={{ taskData, setTaskData }}>
            {children}
        </TaskContext.Provider>
    );

}
export const useTaskContext = () => useContext(TaskContext);