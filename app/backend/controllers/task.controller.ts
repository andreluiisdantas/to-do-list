import * as taskService from "../services/task.service";
import { createTaskDTO, updateTaskDTO } from "../dtos/task.dto";


// CREATE
export async function createTaskController(body: createTaskDTO) {

    return await taskService.createTaskService(body);

}


// GET ALL
export async function listTasksController() {

    return await taskService.listTasksService();

}


// GET BY ID
export async function listTaskController(id: number) {

    return await taskService.listTaskService(id);

}


// UPDATE
export async function updateTaskController(id: number, body: updateTaskDTO) {

    return await taskService.updateTaskService(id, body);

}


// DELETE
export async function deleteTaskController(id: number) {

    return await taskService.deleteTaskService(id);

}