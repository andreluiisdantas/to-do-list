import { db } from "../index";
import { userTable } from "../schema";
import { eq } from "drizzle-orm";
import {
    createUserDTO,
    updateUserDTO,
    responseUserDTO
} from "../../dtos/user.dto";

// SELECT ALL User
export async function getAllUsers(): Promise<responseUserDTO[]> {
    const result = await db.select().from(userTable);

    return result
}

// SELECT User by ID
export async function getUserById(id:number): Promise<responseUserDTO[]> {
    const result = await db.select().from(userTable).where(eq(userTable.id, id));

    return result
}

// CREATE User
export async function createUser(data: createUserDTO): Promise<responseUserDTO[]> {
    const result = await db
    .insert(userTable)
    .values({
        name: data.name,
        email: data.email,
        password_hash: data.password_hash,
    })
    .returning()

    return result
}

// Data types

// UPDATE User
export async function updateUser(id: number, updateUser: updateUserDTO): Promise<responseUserDTO[]>{
    const result = await db
    .update(userTable)
    .set(updateUser)
    .where(eq(userTable.id, id))
    .returning()

    return result;
}

// DELETE User
export async function deleteUser(id: number): Promise<void> {
    await db
    .delete(userTable)
    .where(eq(userTable.id, id))
}