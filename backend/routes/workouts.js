import { Router } from 'express';
import { getWorkouts, insertWorkout } from '../db/index.js';
const workoutRouter = Router();

workoutRouter.get('/', async (req, res) => {
  try {
    const workouts = await getWorkouts();
    res.json(workouts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch workouts' });
  }
});

workoutRouter.post('/', async (req, res) => {
  try {
    const { date, notes } = req.body;
    const newWorkout = await insertWorkout(date, notes);
    res.status(201).json(newWorkout);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to insert workout' });
  }
});

export default workoutRouter;
