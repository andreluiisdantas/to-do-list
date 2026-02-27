// Create DTO
export interface createUserDTO{
    name: string,
    email: string,
    password_hash: string
}

// Update DTO
export interface updateUserDTO{
    name?: string,
    password_hash?: string
}

// Response DTO
export interface responseUserDTO{
    id: number,
    name: string,
    email: string,
    created_at: Date
}