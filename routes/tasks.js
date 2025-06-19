const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET /api/tasks - Get all tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// POST /api/tasks - Add a new task
router.post('/', async (req, res) => {
  const task = new Task({
    title: req.body.title
  });
  await task.save();
  res.json(task);
});

// PUT /api/tasks/:id - Update a task
router.put('/:id', async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      completed: req.body.completed
    },
    { new: true }
  );
  res.json(updatedTask);
});

// DELETE /api/tasks/:id - Delete a task
router.delete('/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted' });
});

module.exports = router;
