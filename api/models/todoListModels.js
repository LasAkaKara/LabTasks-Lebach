import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const TaskSchema = new Schema({
    name:{
        type: String,
        description: "Name of the task",
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    status:{
        type: String,
        enum: ['Pending', 'In Progress', 'Completed'],
        default: 'Pending'
    }
})

export default mongoose.model('Task', TaskSchema)