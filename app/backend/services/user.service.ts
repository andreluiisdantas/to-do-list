import * as bcrypt from 'bcrypt';
import * as userQueries from "../db/queries/user"

// CREATE Service
export async function createUserService(name: string, email: string, password_hash: string, created_at: Date) {
    if(password_hash.length < 6){
        throw new Error("A senha deve ter pelo menos 6 caracteres")
    }

    const saltRounds = 10;
    const password = await bcrypt.hash(password_hash, saltRounds)

    return await userQueries.createUser(name, email, password, created_at);
}

// GET ALL Service
export async function listUsersService() {
    return await userQueries.getAllUsers();
}

// GET By ID Service
export async function listUserService(id: number) {
    return await userQueries.getUserById(id);
}

// DELETE Service
export async function deleteUserService(id: number) {
    return await userQueries.deleteUser(id);
}

// PATCH Service
export async function updateUserService(id: number, data: any) {
    return await userQueries.updateUser(id, data);
}