import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { port } from './config';
//import './database'; // initialize database
import { NotFoundError, ApiError, InternalError } from './core/ApiError';
import routesV1 from './routes/v1';

const app = express();

app.use(bodyParser.json({ limit: '15mb' }));
app.use(bodyParser.urlencoded({ limit: '15mb', extended: true, parameterLimit: 50000 }));
app.use(cors({ origin: "*", optionsSuccessStatus: 200 }));

// Routes
app.use('/api/v1', routesV1);

// catch 404 and forward to error handler
app.use((req, res, next) => next(new NotFoundError()));

// Middleware Error Handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    ApiError.handle(err, res);
  } else {
    if (environment === 'development') {
      console.log(err);
      return res.status(500).send(err.message);
    }
    ApiError.handle(new InternalError(), res);
  }
}); */

/* app.listen(port, () => {
    console.log(`http://localhost:${port}/api/v1`);
  })
  .on('error ', (e) => console.log(e)); */

export default app;