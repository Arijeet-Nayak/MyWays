import React, { useState } from 'react';

function AddTask({ onAddTask }) {
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  const handleAddTask = () => {
    onAddTask(newTask);
    setNewTask({ title: '', description: '' });
  };

  return (
    <div className="add-task">
      <input
        type="text"
        placeholder="Title"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={newTask.description}
        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default AddTask;
