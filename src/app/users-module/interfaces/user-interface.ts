export interface User {
    name: string,
    surname?: string,
    email?: string,
    age: number,
    status?: boolean,
    id?: number,
    company?: string,
    department?: string,
    gender?: string
    carInformation?: {
        brand: string,
        number: string
    }
}