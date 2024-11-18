import { integer, pgEnum, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import {
  PASSWORD_LENGTH,
  USERNAME_LENGTH,
} from '../constants/database.constant';
import { tokens } from './token.schema';

export const rolesEnum = pgEnum('roles', ['guest', 'user', 'admin']);

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  username: varchar('username', { length: USERNAME_LENGTH }).notNull(),
  email: varchar('email').notNull(),
  password: varchar('password', { length: PASSWORD_LENGTH }).notNull(),
  role: rolesEnum(),
  tokenId: integer('tokenId').references(() => tokens.id),
});