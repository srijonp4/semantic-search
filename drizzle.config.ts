import type { Config } from 'drizzle-kit';

export default {
  driver: 'pg',
  schema: './src/db/schema.ts',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
  out: './drizzle',
} satisfies Config;

/* 

Note:

In JavaScript, the `!` symbol is the "non-null assertion operator." It tells the TypeScript compiler that the expression to its left will not be `null` or `undefined`. In this context, `process.env.NEON_DB_URL!` indicates that `NEON_DB_URL` in the `process.env` object is expected to have a value, and TypeScript should not consider it possibly `null` or `undefined`.

However, using `!` like this can be risky, as if `NEON_DB_URL` is actually `null` or `undefined`, it will result in a runtime error. It's often safer to handle potentially `null` or `undefined` values explicitly in your code.

*/
