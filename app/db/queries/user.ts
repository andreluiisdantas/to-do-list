import { db } from "../index";
import { userTable } from "../schema";
import { eq } from "drizzle-orm";

// SELECT ALL User
export async function getAllUsers() {
    const result = await db.select().from(userTable);

    return result
}

// SELECT User by ID
export async function getUserById(id:number) {
    const result = await db.select().from(userTable).where(eq(userTable.id, id));

    return result
}

// CREATE User
export async function createUser(name: string, email: string, password_hash: string, created_at: Date) {
    const result = await db
    .insert(userTable)
    .values({
        name,
        email,
        password_hash,
        created_at
    })
    .returning()

    return result
}

// Data types
type updateUserData = {
    name?: string;
    email?: string;
    password_hash?: string;
}

// UPDATE User
export async function updateUser(id: number, updateUser: updateUserData){
    const result = await db
    .update(userTable)
    .set(updateUser)
    .where(eq(userTable.id, id))
    .returning()

    return result;
}

// DELETE User
export async function deleteUser(id: number) {
    await db
    .delete(userTable)
    .where(eq(userTable.id, id))
}