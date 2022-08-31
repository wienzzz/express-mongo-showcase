import { Router } from 'express';
import { addTheater, deleteTheater, editTheater, getTheater, listTheater } from '../controller/theater.controller';


const theaterRoute = Router();

/* Route without middleware first */
theaterRoute.get('/', listTheater);
theaterRoute.get('/:theaterId', getTheater);
theaterRoute.post('/', addTheater);
theaterRoute.put('/:theaterId', editTheater);
theaterRoute.delete('/:theaterId', deleteTheater);

/* Route with auth middleware first */

export default theaterRoute;
