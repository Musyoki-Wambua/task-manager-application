import React, { useState, useEffect } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [description, setDescription] = useState('');
  const [due, setDue] = useState('');

  useEffect(() => {
    fetch('http://localhost:9292/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error(err));
  }, []);

  const [filter, setFilter] = useState({ completed: false, dueDate: null });

  function handleFilterChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFilter({ ...filter, [name]: value });
  }

  const filteredTasks = tasks
    .filter(task => filter.completed ? task.completed === filter.completed : true)
    .filter(task => filter.dueDate ? task.due === filter.dueDate : true)
    .sort((a, b) => a.due.localeCompare(b.due)); // Sort tasks by due date

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
