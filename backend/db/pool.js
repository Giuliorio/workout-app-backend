import { Pool } from 'pg';

module.exports = new Pool({
  host: 'localhost',
  user: 'zen',
  database: 'workouts',
  password: '',
  post: '5432',
});
