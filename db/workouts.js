import pool from './pool.js';

export async function getWorkouts() {
  const { rows } = await pool.query('SELECT * FROM workouts');
  return rows;
}

export async function insertWorkout(date, notes = null) {
  const result = await pool.query(
    'INSERT INTO workouts (date, notes) VALUES ($1, $2) RETURNING *',
    [date, notes]
  );

  return result.rows[0];
}
