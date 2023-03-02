import React, { useState, useEffect } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [description, setDescription] = useState('');
  const [due, setDue] = useState('');

  useEffect(() => {
    fetch('/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error(err));
  }, []);

  const handleTaskClick = (id) => {
    const clickedTask = tasks.find(task => task.id === id);

    const updatedDescription = prompt('Enter updated description:', clickedTask.description);
    const updatedDue = prompt('Enter updated due date (YYYY-MM-DD):', clickedTask.due);

    fetch(`/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description: updatedDescription,
        due: updatedDue
      })
    })
      .then(res => {
        if (res.ok) {
          const updatedTasks = tasks.map(task => {
            if (task.id === id) {
              return {
                ...task,
                description: updatedDescription,
                due: updatedDue
              };
            }
            return task;
          });
          setTasks(updatedTasks);
        } else {
          throw new Error('Failed to update task.');
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id} onClick={() => handleTaskClick(task.id)}>
            <h3>{task.description}</h3>
            <p>Due: {task.due}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}export default TaskList
