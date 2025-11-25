import { Router } from 'express';
import { getExercises, insertExercise } from '../db/index.js';
const workoutRouter = Router();

workoutRouter.get('/', async (req, res) => {
  try {
    const exercises = await getExercises();
    res.json(exercises);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch exercies' });
  }
});

workoutRouter.post('/', async (req, res) => {
  try {
    const { exerciseName } = req.body;
    const newExercise = await insertExercise(exerciseName);
    res.status(201).json(newExercise);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to insert exercise' });
  }
});

export default workoutRouter;
