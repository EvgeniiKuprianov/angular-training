export interface User {
    firstName: string,
    lastName: string,
    age: number,
    status: boolean,
    email: string,
    company: string,
    department: string,
    addressField: {
        city?: string,
        address?: string,
        zipCode?: string
    }
    gender: string,
    id?: number
}