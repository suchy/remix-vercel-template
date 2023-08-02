import type { Config } from 'drizzle-kit';
import 'dotenv';

export default {
  schema: './app/schema.ts',
  out: './drizzle',
  driver: 'mysql2',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string
  }
} satisfies Config;
