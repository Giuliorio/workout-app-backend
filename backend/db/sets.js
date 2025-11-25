import pool from './pool.js';

export async function getSets() {
  const { rows } = await pool.query('SELECT * FROM sets');
  return rows;
}

export async function insertSet(
  workoutId,
  exerciseId,
  setNumber,
  weightPerSide,
  reps,
  notes = null
) {
  const result = await pool.query(
    `INSERT INTO sets (workout_id, exercise_id, set_number, weight_per_side, reps, notes)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING *`,
    [workoutId, exerciseId, setNumber, weightPerSide, reps, notes]
  );

  return result.rows[0];
}
