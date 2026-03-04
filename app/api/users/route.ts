import { NextRequest, NextResponse } from "next/server";
import { listUsersController, createUserController } from "@/app/backend/controllers/user.controller";

// GET ALL
export async function GET(){
    try{
        const users = await listUsersController();
        return NextResponse.json(users);
    }catch (error){
        return NextResponse.json({ error: "Erro ao buscar usuários" }, { status: 500 });
    }
}

// POST
export async function POST(request: NextRequest){
    try{
        const body = await request.json();
        const newUser = await createUserController(body);
        return NextResponse.json(newUser, {status: 201});
    }catch (error){
        return NextResponse.json({ error: "Erro ao criar usuário" }, { status: 400 });
    }
}