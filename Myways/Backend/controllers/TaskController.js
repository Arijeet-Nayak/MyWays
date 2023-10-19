const KanbanTask = require('../models/KanbanTask');


exports.createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const task = new KanbanTask({ title, description, status });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Task creation failed' });
  }
};


exports.updateTask = async (req, res) => {
  
};


exports.deleteTask = async (req, res) => {
  
};


exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await KanbanTask.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};
