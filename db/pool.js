import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  user: 'zen',
  database: 'workouts',
  password: '',
  post: '5432',
});

export default pool;
