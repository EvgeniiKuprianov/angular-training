export interface User {
    name: string,
    surname?: string,
    age: number,
    status?: boolean,
    image?: string,
    id?: number,
    company?: string,
    department?: string,
    gender?: string
    carInformation?: {
        brand: string,
        number: string
    }
}