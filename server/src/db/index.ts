import { Pool } from 'postgres-pool';
// import { ActorDb } from './ActorDb'
// import { Actor } from './pg/Actor';


const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST || "localhost",
  database: process.env.POSTGRES_DATABASE || "todoDB",
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT) : 5432,
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});
// const NUMERIC_OID = 1700;

// types.setTypeParser(NUMERIC_OID, (val) =>
//   parseFloat(val)
// );

// export const actor: ActorDb = new Actor(pool);
export default pool