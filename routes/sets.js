import { Router } from 'express';
import { getSets, insertSet } from '../db/index.js';
const setRouter = Router();

setRouter.get('/', async (req, res) => {
  try {
    const sets = await getSets();
    res.json(sets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch sets' });
  }
});

setRouter.post('/', async (req, res) => {
  try {
    const { workoutId, exerciseId, setNumber, weightPerSide, reps, notes } =
      req.body;
    const newSet = await insertSet(
      workoutId,
      exerciseId,
      setNumber,
      weightPerSide,
      reps,
      notes
    );
    res.status(201).json(newSet);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to insert set' });
  }
});

export default setRouter;
