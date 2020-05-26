import * as express from 'express';

const BaseRoutes = express.Router();

BaseRoutes.get('/', (req, res) =>
  res.json({
    status: "welcome node rest api"
  })
);

export default BaseRoutes;