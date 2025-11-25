import express from 'express';
import { workoutRouter, setRouter, exerciseRouter } from './routes/index.js';

const app = express();

app.use(express.json());

app.use('/workouts', workoutRouter);
app.use('/exercises', exerciseRouter);
app.use('/sets', setRouter);

const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Server running on port: ${PORT}`);
});
