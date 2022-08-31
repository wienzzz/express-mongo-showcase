import { NextFunction, Request, Response } from "express";
import { theaterSchema } from '../model/theater.model';
import { ITheater } from '../interface/theaters.interface';
import { mongoSampleMflix } from "../config/db.config";
import { IResponse } from "../interface/reponse.interface";

const Theater = mongoSampleMflix.model<ITheater>('Theater', theaterSchema);

export async function listTheater(req: Request, res: Response, next: NextFunction) {
    let _response: IResponse = { status: false, message: '' };
    try {
        let _ = req;
        let abc: Array<ITheater> = await Theater.find({}).exec()
        _response.status = true;
        _response.data = abc;
        _response.message = "List Theater Success";
        return res.status(200).json(_response);
    } catch (err: any) {
        console.error(`Error while doing addItem`, err?.message);
        next(err);
    }
}

export async function getTheater(req: Request, res: Response, next: NextFunction) {
    let _response: IResponse = { status: false, message: '' };
    try {
        let theater = await Theater.findOne({ theaterId: req.params.theaterId}).exec()
        _response.status = true;
        _response.data = theater;
        _response.message = "List Theater Success";
        return res.status(200).json(_response);
    } catch (err: any) {
        console.error(`Error while doing addItem`, err?.message);
        next(err);
    }
}

export async function addTheater(req: Request, res: Response, next: NextFunction) {
    let _response: IResponse = { status: false, message: '' };

    try {
        const t = new Theater({
            theaterId: req.body.theaterId,
            location: {
                address: {
                    city: req.body.location.address.city,
                    state: req.body.location.address.state,
                    street1: req.body.location.address.street1,
                    zipcode: req.body.location.address.zipcode
                }, 
                geo: {
                    type: req.body.location.geo.type,
                    coordinates: req.body.location.geo.coordinates
                }   
            }
        });
        t.save().then(() => {
            _response.status = true;
            _response.message = "Add Theater Success";
            return res.status(200).json(_response);
        });
    } catch (err: any) {
        console.error(`Error while doing addItem`, err?.message);
        next(err);
    }
} 

export async function editTheater(req: Request, res: Response, next: NextFunction) {
    let _response: IResponse = { status: false, message: '' };

    try {
        const filter = { theaterId: req.params.theaterId }
        const t = {
            location: {
                address: {
                    city: req.body.location.address.city,
                    state: req.body.location.address.state,
                    street1: req.body.location.address.street1,
                    zipcode: req.body.location.address.zipcode
                }, 
                geo: {
                    type: req.body.location.geo.type,
                    coordinates: req.body.location.geo.coordinates
                }   
            }
        };
        Theater.findOneAndUpdate(filter, t).then(() => {
            _response.status = true;
            _response.message = "Edit Theater Success";
            return res.status(200).json(_response);
        });
    } catch (err: any) {
        console.error(`Error while doing addItem`, err?.message);
        next(err);
    }
} 

export async function deleteTheater(req: Request, res: Response, next: NextFunction) {
    let _response: IResponse = { status: false, message: '' };

    try {
        const filter = { theaterId: req.params.theaterId }
    
        Theater.findOneAndDelete(filter).then(() => {
            _response.status = true;
            _response.message = "Delete Theater Success";
            return res.status(200).json(_response);
        });
    } catch (err: any) {
        console.error(`Error while doing addItem`, err?.message);
        next(err);
    }
} 

