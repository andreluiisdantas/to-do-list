import * as taskQueries from "../db/queries/task";
import { createTaskDTO, updateTaskDTO, responseTaskDTO} from "../dtos/task.dto";
import { userTable } from "../db/schema";
import { eq } from "drizzle-orm";
import { db } from "../db/index";

// CREATE Service
export async function createTaskService(data: createTaskDTO): Promise<responseTaskDTO> {

    const userExists = await db
        .select()
        .from(userTable)
        .where(eq(userTable.id, data.user_id))
        .limit(1);

    if (userExists.length === 0) {
        throw new Error("Usuário não encontrado. Não é possível criar a tarefa.");
    }

    const result = await taskQueries.createTask(data);

    return result[0];
}

// GET ALL Service
export async function listTasksService(): Promise<responseTaskDTO[]> {
    return await taskQueries.getAllTasks();
}

// GET By ID Service
export async function listTaskService(id: number): Promise<responseTaskDTO | null> {
    const result = await taskQueries.getByIdTasks(id);

    return result.length > 0 ? result[0] : null;
}

// DELETE Service
export async function  deleteTaskService(id: number): Promise<void> {
    return await taskQueries.deleteTask(id);
}

// PATCH Service
export async function updateTaskService(id: number, data: updateTaskDTO): Promise<responseTaskDTO | null> {
    const result = await taskQueries.updateTask(id, data);

    return result.length > 0 ? result[0] : null;
}