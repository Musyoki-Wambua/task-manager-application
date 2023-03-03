import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';

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

  const handleTaskUpdate = (updatedTask) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task List</h1>
      <div>
        <label htmlFor="completed">Completed:</label>
        <input
          type="checkbox"
          id="completed"
          name="completed"
          checked={filter.completed}
          onChange={handleFilterChange}
        />
      </div>
      <div>
        <label htmlFor="dueDate">Due Date:</label>
        <input
          type="text"
          id="dueDate"
          name="dueDate"
          value={filter.dueDate || ''}
          onChange={handleFilterChange}
        />
      </div>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>
            <TaskItem task={task} onUpdate={handleTaskUpdate} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
