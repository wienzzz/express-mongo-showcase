import { Schema } from "mongoose";
import { ITheater } from "../interface/theaters.interface";

export const theaterSchema = new Schema<ITheater>({
    theaterId: { type: Number, required: true },
    location: {
        address: {
            street1: String,
            city: String,
            state: String,
            zipcode: String
        },
        geo: {
            type: { type: String },
            coordinates: Array
        }
    }
})