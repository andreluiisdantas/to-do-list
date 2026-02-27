import * as userService from "../services/user.service";
import { createUserDTO, updateUserDTO } from "../dtos/user.dto";


// CREATE
export async function createUserController(body: createUserDTO) {

    return await userService.createUserService(body);

}


// GET ALL
export async function listUsersController() {

    return await userService.listUsersService();

}


// GET BY ID
export async function getUserController(id: number) {

    return await userService.listUserService(id);

}


// UPDATE
export async function updateUserController(id: number, body: updateUserDTO) {

    return await userService.updateUserService(id, body);

}


// DELETE
export async function deleteUserController(id: number) {

    return await userService.deleteUserService(id);

}