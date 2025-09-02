// small script to populate sample tasks
import 'dotenv/config';
import mongoose from 'mongoose';
import Task from './src/models/taskModel.js';

async function run() {
  await mongoose.connect(process.env.MONGO_URI);
  await Task.deleteMany({});

  const statuses = ['todo', 'doing', 'done'];
  const docs = [];
  for (let i = 0; i < 120; i++) {
    docs.push({
      title: `Sample task #${i + 1}`,
      status: statuses[i % statuses.length],
      priority: Math.floor(Math.random() * 5),
      createdAt: new Date(Date.now() - i * 1000 * 60) 
    });
  }

  await Task.insertMany(docs);
  console.log('Created', docs.length, ' Dummy tasks');
  mongoose.connection.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});