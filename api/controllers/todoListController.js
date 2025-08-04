import mongoose from 'mongoose';

const Task = mongoose.model('Task')

export const list_all_tasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).send(err.message || 'Server Error');
  }
};

export const create_a_task = async (req, res) => {
  try {
    const new_task = new Task(req.body);
    const task = await new_task.save();
    res.status(201).json(task);
  } catch (err) {
    console.log("Error POSTING: " + err);
  }
};

export const read_a_task = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(500).send(err.message || 'Error retrieving task');
  }
};