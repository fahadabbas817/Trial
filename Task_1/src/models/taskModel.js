import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    status: { type: String, enum: ['todo', 'doing', 'done'], default: 'todo' },
    priority: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
  },
  { versionKey: false }
);

TaskSchema.index({ createdAt: -1, status: 1 });

export default mongoose.model('Task', TaskSchema);