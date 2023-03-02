import React from 'react';
import Task from './Task';

const TaskList = ({ tasks }) => {
  if (!tasks) {
    return null; // or render a loading spinner, error message, etc.
  }

  return (
    <div>
      {tasks.map(task => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
