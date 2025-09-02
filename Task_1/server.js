import 'dotenv/config';
import express from  'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import cors from 'cors';
import tasksRoute from './src/routes/tasks.js';
import errorHandler from './src/middleware/errorHandler.js';

const app = express();
app.use(helmet());
app.use(express.json());
app.use(cors());

// route handlers
app.get('/', (req, res) => {
  res.send(' Server is running! Use /api/tasks to access tasks API.');
});


app.use('/api/tasks', tasksRoute);

// error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

// connect to mongodb and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(' MongoDB connected');
    app.listen(PORT, () => console.log(` Server listening on http://localhost:${PORT}`));
    
    
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// global unhandled rejection handler
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// close connection on CTRL+C (App terminaton)
process.on('SIGINT', () => {
  console.log('sigint received, closing MongoDB connection');
  mongoose.connection.close(false).then(() => process.exit(0));
});