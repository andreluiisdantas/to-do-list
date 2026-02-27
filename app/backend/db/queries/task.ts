import { db } from "../index";
import { taskTable } from "../schema";
import { eq } from "drizzle-orm";

// SELECT ALL Task
export async function getAllTasks() {
    const result = await db.select().from(taskTable);

    return result;
}

// SELECT Task by ID
export async function getByIdTasks(id: number){
    const result = await db.select().from(taskTable).where(eq(taskTable.id, id))

    return result;
}

// CREATE Task
export async function createTask(title: string, description: string, completed: boolean, user_id: number){
    const result = await db
        .insert(taskTable)
        .values({
            title,
            description,
            completed,
            user_id
        })
        .returning();

        return result;
}

// Data types
type updateTaskData = {
    title?: string;
    description?: string;
    completed?: boolean;
}

// UPDATE Task
export async function updateTask(id: number, updateTask: updateTaskData){
    const result = await db
    .update(taskTable)
    .set(updateTask)
    .where(eq(taskTable.id, id))
    .returning()

    return result;
}

// DELETE Task
export async function deleteTask(id: number) {
    await db
    .delete(taskTable)
    .where(eq(taskTable.id, id))
}