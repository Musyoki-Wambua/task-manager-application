import React from 'react';
import { useState, useEffect } from 'react';


const Task = () => {
    const[tasks, setTasks]= useState([]);

    useEffect (() => {
        fetch(URL)
    }, [])


    return (
        <div>
            
        </div>
    );
};

export default Task;