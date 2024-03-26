import { doublePrecision, pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import test from 'node:test';
export const productsTable = pgTable('products', {
  id: text('id').primaryKey().default('uuid_generate_v4()'),
  name: text('name').notNull(),
  imageId: text('image_id').notNull(),
  price: doublePrecision('price').notNull(),
  description: text('description'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export type Product = typeof productsTable.$inferSelect;
