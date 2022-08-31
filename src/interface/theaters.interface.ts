export interface ITheater {
    theaterId: number,
    location: {
        address: {
            street1: string,
            city: string,
            state: string,
            zipcode: string
        },
        geo: {
            type: string,
            coordinates: number[]
        }
    }
}