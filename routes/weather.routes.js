import { Router } from 'express';
import { weatherLocationCtrl } from '../controllers/weather.controller.js';

const router = Router();

router.post('/', weatherLocationCtrl)

export default router;