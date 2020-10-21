import express from 'express';
import { createMetric, getMetric } from './metricController';

const metricRoutes = express.Router();

metricRoutes.post('/metric/:key', createMetric);
metricRoutes.get('/metric/:key/sum', getMetric);

export default metricRoutes;