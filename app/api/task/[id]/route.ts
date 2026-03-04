import { NextRequest, NextResponse } from "next/server";
import { listTaskController, updateTaskController, deleteTaskController } from "@/app/backend/controllers/task.controller";

interface RouteParams{
    params: {id: string};
}

// GET BY ID
export async function GET({params}: RouteParams) {
    try{
        const id = Number(params.id);
        const task = await listTaskController(id);

        if(!task) return NextResponse.json({error: "Tarefa não encontrada."}, {status: 404});
        return NextResponse.json(task);
    }catch(error){
        return NextResponse.json({error: "Erro ao buscar usuário"}, {status: 500})
    }
}

// PATCH
export async function PATCH(request: NextRequest, { params }: RouteParams) {
    try{
        const id = Number(params.id);
        const body = await request.json();
        const updatedTask= await updateTaskController(id, body);

        return NextResponse.json(updatedTask);
    }catch (error){
        return NextResponse.json({ error: "Erro ao atualizar"}, { status: 400});
    }
}

// DELETE 
export async function DELETE({ params }: RouteParams) {
    try{
        const id = Number(params.id);
        await deleteTaskController(id);
        return new NextResponse(null, {status: 204});
    }catch (error){
        return NextResponse.json({ error: "Erro ao deletar"}, { status: 500 });
    }
}