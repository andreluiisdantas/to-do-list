import * as bcrypt from 'bcrypt';
import * as userQueries from "../db/queries/user"
import { createUserDTO, updateUserDTO, responseUserDTO } from "../dtos/user.dto";

// CREATE Service
export async function createUserService(data: createUserDTO): Promise<responseUserDTO> {
    if(data.password_hash.length < 6){
        throw new Error("A senha deve ter pelo menos 6 caracteres")
    }

    const saltRounds = 10;
    const password = await bcrypt.hash(data.password_hash, saltRounds)

    const result = await userQueries.createUser({
        name: data.name,
        email: data.email,
        password_hash: password,
    });

    return result[0];
}

// GET ALL Service
export async function listUsersService(): Promise<responseUserDTO[]> {
    return await userQueries.getAllUsers();
}

// GET By ID Service
export async function listUserService(id: number): Promise<responseUserDTO | null> {
    const result = await userQueries.getUserById(id);

    return result.length > 0 ? result[0] : null;
}

// DELETE Service
export async function deleteUserService(id: number): Promise<void> {
    return await userQueries.deleteUser(id);
}

// PATCH Service
export async function updateUserService(id: number, data: updateUserDTO): Promise<responseUserDTO | null> {
    const result = await userQueries.updateUser(id, data);

    return result.length > 0 ? result[0] : null;
}