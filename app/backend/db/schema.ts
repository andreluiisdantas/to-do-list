import { integer, pgTable, varchar, text, timestamp, boolean} from "drizzle-orm/pg-core";

// User Table
export const userTable = pgTable("user", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({length: 255}).notNull(),
    email: varchar({length: 255}).notNull(),
    password_hash: text().notNull(),
    created_at: timestamp().notNull().defaultNow()
})

// Task Table
export const taskTable = pgTable("task", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    title: varchar({length: 255}).notNull(),
    description: text().notNull(),
    completed: boolean().notNull().default(false),
    user_id: integer().notNull().references(() => userTable.id, {onDelete: 'cascade'})
})