import { Router } from 'express';
import { getWorkouts, insertWorkout } from '../db';
const workoutRouter = Router();

workoutRouter.get('/', async (req, res) => {
  try {
    const exercises = await getWorkouts();
    res.json(exercises);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch exercies' });
  }
});

workoutRouter.post('/', async (req, res) => {
  try {
    const { exerciseName } = req.body;
    const newExercise = await insertWorkout(exerciseName);
    res.status(201).json(newExercise);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to insert exercise' });
  }
});

export default workoutRouter;
