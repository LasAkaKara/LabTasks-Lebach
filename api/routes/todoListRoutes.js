import { list_all_tasks, create_a_task, read_a_task } from '../controllers/todoListController.js';
import express from 'express';

const app = express.Router();

app.route('/tasks', (req, res) => {
    console.log("Received a request for tasks");
    res.send("Tasks endpoint reached");
})
    .get(list_all_tasks)
    .post(create_a_task);

app.route('/tasks/:taskId')
    .get(read_a_task)

console.log("Todo List Routes initialized successfully");

export default app;
