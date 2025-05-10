// src/lib/schema.ts
import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const answers = pgTable('answers', {
  id: serial('id').primaryKey(),
  q1: text('q1'),
  q2: text('q2')
});