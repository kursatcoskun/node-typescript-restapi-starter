import * as express from 'express';

const BaseRoutes = express.Router();

BaseRoutes.get('/', (req, res) =>
  res.json({
    status: "welcome node rest api"
  })
);

// Mismatch URL
BaseRoutes.get('*', (req, res) =>
res.status(404).json({
    status: "Requested url could not found"
  })
);

export default BaseRoutes;
