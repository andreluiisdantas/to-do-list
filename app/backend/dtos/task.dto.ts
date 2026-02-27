// Create DTO
export interface createTaskDTO{
    title: string,
    description: string,
    completed: boolean,
    user_id: number,
}

// Update DTO
export interface updateTaskDTO{
    title?: string,
    description?: string,
    completed?: boolean,
    user_id?: number
}

// Response DTO
export interface responseTaskDTO{
    id: number,
    title: string,
    description: string,
    completed: boolean,
    user_id: number
}