import React from 'react';
import Column from './Column';
import AddTask from './AddTask';

function Board({ tasks, onAddTask, onEditTask, onMoveTask }) {
  return (
    <div className="kanban-board">
      <Column title="To Do" status="todo" tasks={tasks} onEditTask={onEditTask} onMoveTask={onMoveTask} />
      <Column title="In Progress" status="inProgress" tasks={tasks} onEditTask={onEditTask} onMoveTask={onMoveTask} />
      <Column title="Done" status="done" tasks={tasks} onEditTask={onEditTask} onMoveTask={onMoveTask} />
      <AddTask onAddTask={onAddTask} />
    </div>
  );
}

export default Board;
