import * as taskQueries from "../db/queries/task"
import { userTable } from "../db/schema";
import { eq } from "drizzle-orm";
import { db } from "../db/index";

// CREATE Service
export async function createTaskService(title: string, description: string, completed: boolean, user_id: number) {
    
    completed = false

    const userExists = await db
        .select()
        .from(userTable)
        .where(eq(userTable.id, user_id))
        .limit(1);

    if (userExists.length === 0) {
        throw new Error("Usuário não encontrado. Não é possível criar a tarefa.");
    }

    return await taskQueries.createTask(title, description, completed, user_id);
}

// GET ALL Service
export async function listTasksService() {
    return await taskQueries.getAllTasks();
}

// GET By ID Service
export async function listTaskService(id: number) {
    return await taskQueries.getByIdTasks(id);
}

// DELETE Service
export async function  deleteTaskService(id: number) {
    return await taskQueries.deleteTask(id);
}

// PATCH Service
export async function updateTaskService(id: number, data: any) {
    return await taskQueries.updateTask(id, data)
}