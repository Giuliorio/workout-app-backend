import express from 'express';
import { workoutRouter, setRouter, exerciseRouter } from './routes/index.js';
const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use('/workouts', workoutRouter);
app.use('/exercises', exerciseRouter);
app.use('/sets', setRouter);

app.listen(port, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Server running on port: ${port}`);
});
