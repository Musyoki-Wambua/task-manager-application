import React from 'react';
import Task from './Task';

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map(task => <Task task={task} key={task.id} />)}
    </div>
  );
};

export default TaskList;
