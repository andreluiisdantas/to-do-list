import { NextRequest, NextResponse } from "next/server";
import { listTasksController, createTaskController } from "@/app/backend/controllers/task.controller";

// GET ALL
export async function GET() {
    try{
        const tasks = await listTasksController();
        return NextResponse.json(tasks)
    }catch(error){
        console.error("DETALHE DO ERRO 500:", error);
        return NextResponse.json({error: "Erro ao encontrar a tarefa"}, {status: 500});
    }
}

// POST
export async function POST(request: NextRequest) {
    try{
        const body = await request.json();
        const newTask = await createTaskController(body);
        return NextResponse.json(newTask, {status: 201});
    }catch(error){
        return NextResponse.json({error: "Erro ao criar tarefa"}, {status: 400});
    }
}