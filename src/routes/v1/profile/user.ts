import express, {Request, Response} from 'express';
import { getPortafolio } from './user.controller';

const router = express.Router();

router.get('/prueba', getPortafolio);


export default router;