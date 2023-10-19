import React from 'react';
import Task from './Task';

function Column({ title, status, tasks, onEditTask, onMoveTask }) {
  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <div className="column">
      <h2>{title}</h2>
      <div className="tasks">
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} onEditTask={onEditTask} onMoveTask={onMoveTask} />
        ))}
      </div>
    </div>
  );
}

export default Column;
