import React, { useState } from 'react';
import EditTask from './EditTask';

function Task({ task, onEditTask, onMoveTask }) {
  const [isEditing, setEditing] = useState(false);

  const handleEdit = (editedTask) => {
    setEditing(false);
    onEditTask(editedTask);
  };

  return (
    <div className="task">
      {isEditing ? (
        <EditTask task={task} onEdit={handleEdit} />
      ) : (
        <>
          <div className="task-title">{task.title}</div>
          <div className="task-description">{task.description}</div>
          <div className="task-actions">
            <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={() => onMoveTask(task.id)}>Move</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Task;
