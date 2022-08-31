import express, { Express, Response} from 'express'
import dotenv from 'dotenv';
import theaterRoute from './route/theater.route'

dotenv.config();
const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (res: Response) => {
  res.json({'message': 'ok'});
})
app.use('/theater', theaterRoute)
/* Error handler middleware */

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}); 