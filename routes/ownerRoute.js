// routes/ownerRoute.js
import Router from 'express';
const routeOwner = Router();

import { getOwner, postOwner, putOwner } from '../controllers/ownerController.js';

routeOwner.get('/api/owners', getOwner);
routeOwner.post('/api/owners', postOwner);
routeOwner.put('/api/owners', putOwner);

export default routeOwner;
