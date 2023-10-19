import React, { useState } from 'react';

function EditTask({ task, onEdit }) {
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    onEdit(editedTask);
  };

  return (
    <div className="edit-task">
      <input
        type="text"
        value={editedTask.title}
        onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
      />
      <textarea
        value={editedTask.description}
        onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
      />
      <button onClick={handleEdit}>Save</button>
    </div>
  );
}

export default EditTask;
