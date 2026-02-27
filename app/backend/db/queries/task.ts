import { db } from "../index";
import { taskTable } from "../schema";
import { eq } from "drizzle-orm";
import {
  createTaskDTO,
  updateTaskDTO,
  responseTaskDTO
} from "../../dtos/task.dto";


// SELECT ALL Task
export async function getAllTasks(): Promise<responseTaskDTO[]> {

    const result = await db
        .select()
        .from(taskTable);

    return result;
}


// SELECT Task by ID
export async function getByIdTasks(id: number): Promise<responseTaskDTO[]> {

    const result = await db
        .select()
        .from(taskTable)
        .where(eq(taskTable.id, id));

    return result;
}


// CREATE Task
export async function createTask(data: createTaskDTO): Promise<responseTaskDTO[]> {

    const result = await db
        .insert(taskTable)
        .values({
            title: data.title,
            description: data.description,
            completed: data.completed ?? false,
            user_id: data.user_id
        })
        .returning();

    return result;
}


// UPDATE Task
export async function updateTask(
    id: number,
    data: updateTaskDTO
): Promise<responseTaskDTO[]> {

    const result = await db
        .update(taskTable)
        .set(data)
        .where(eq(taskTable.id, id))
        .returning();

    return result;
}


// DELETE Task
export async function deleteTask(id: number): Promise<void> {

    await db
        .delete(taskTable)
        .where(eq(taskTable.id, id));
}