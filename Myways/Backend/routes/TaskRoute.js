const express = require('express');
const router = express.Router();

const KanbanController = require('../controllers/KanbanController');


router.post('/tasks', KanbanController.createTask);


router.put('/tasks/:taskId', KanbanController.updateTask);


router.delete('/tasks/:taskId', KanbanController.deleteTask);


router.get('/tasks', KanbanController.getAllTasks);

module.exports = router;
