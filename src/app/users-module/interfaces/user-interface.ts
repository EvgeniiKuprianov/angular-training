export interface UserFromService {
    name: {
        title: string,
        first: string,
        last: string
    },
    gender: string,
    email: string,
    phone: string,
    dob: {
        age: number
    }
    location: {
        country: string,
        city: string,
        postcode: number
        state: string
    }
    picture: {
        large: string,
        medium: string,
        thumbnail: string
    }
    id: number,
    status: boolean;
}

export interface Response { 
    results: UserFromService[],
    info: {
        seed: string,
        results: number,
        page: number,
        version: string
    }
}