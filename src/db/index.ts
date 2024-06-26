/* import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(process.env.NEON_DB_URL!);
export const db = drizzle(sql);

// const result = await db.select().from(...);
 */

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const connector = neon(process.env.DATABASE_URL!);

export const db = drizzle(connector);
