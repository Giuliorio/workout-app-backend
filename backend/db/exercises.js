import pool from './pool.js';

export async function getExercises() {
  const { rows } = await pool.query('SELECT * FROM exercises');
  return rows;
}

export async function insertExercise(exerciseName) {
  const result = await pool.query(
    'INSERT INTO exercises (name) VALUES ($1) RETURNING *',
    [exerciseName]
  );

  return result.rows[0];
}
