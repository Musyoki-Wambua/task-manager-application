import React, { useState, useEffect } from 'react';

function Task(props) {
  const [description, setDescription] = useState(props.task.description);
  const [due, setDue] = useState(props.task.due);

  function handleUpdate() {
    fetch(`/tasks/${props.task.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description: description,
        due: due
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      props.onUpdate(data);
    })
    .catch(error => console.error(error));
  }

  return (
    <div>
      <label htmlFor={`description-${props.task.id}`}>Description:</label>
      <input
        type="text"
        id={`description-${props.task.id}`}
        value={description}
        onChange={event => setDescription(event.target.value)}
      />
      <br />
      <label htmlFor={`due-${props.task.id}`}>Due:</label>
      <input
        type="text"
        id={`due-${props.task.id}`}
        value={due}
        onChange={event => setDue(event.target.value)}
      />
      <br />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default Task;
