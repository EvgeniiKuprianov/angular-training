export interface User {
    name: string,
    age: number,
    status: boolean,
    id: number
    carInformation?: {
        brand: string,
        number: string
    }
}