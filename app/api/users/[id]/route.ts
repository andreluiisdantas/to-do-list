import { NextRequest, NextResponse } from "next/server";
import { listUserController, updateUserController, deleteUserController } from "@/app/backend/controllers/user.controller";

interface RouteParams{
    params: {id: string};
}

// GET BY ID
export async function GET(request: NextRequest, { params }: RouteParams){
    try{
        const id = Number(params.id);
        const user = await listUserController(id);

        if(!user) return NextResponse.json({error: "Usuário não encontrado"}, {status: 404});
        return NextResponse.json(user)
    }catch(error){
        return NextResponse.json({error: "Erro ao buscar usuário"}, { status: 500})
    }
}

// PATCH
export async function  PATCH(request: NextRequest, { params }: RouteParams) {
    try{
        const id = Number(params.id);
        const body = await request.json();
        const updatedUser = await updateUserController(id, body);

        return NextResponse.json(updatedUser);
    }catch (error){
        return NextResponse.json({ error: "Erro ao atualizar" }, { status: 400});
    }
}

// DELETE
export async function DELETE({ params }: RouteParams){
    try {
        const id = Number(params.id);
        await deleteUserController(id);
        return new NextResponse(null, { status: 204 });
    } catch (error){
        return NextResponse.json({ error: "Erro ao deletar"}, { status: 500 });
    }
}