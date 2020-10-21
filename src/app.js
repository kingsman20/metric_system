import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import metricRoutes from './metric/metricRoute';

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Metric Roues
app.use(metricRoutes);

// Handle Invalid route
app.get('/*', (req, res) => {
  res.status(404).send({ success: false, message: 'Invalid Route' });
});

module.exports = app;
