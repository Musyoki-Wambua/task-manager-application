import React from 'react';
import { useState, useEffect } from 'react';

function TaskDetails(props) {
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetch(`/tasks/${props.taskId}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to load task details');
        }
      })
      .then(data => setTask(data))
      .catch(error => console.error(error));
  }, [props.taskId]);

  if (!task) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Task Details</h2>
      <p>Description: {task.description}</p>
      <p>Due: {task.due}</p>
      <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default TaskDetails;
