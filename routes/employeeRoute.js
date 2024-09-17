import Router from 'express';
const routeEmployee = Router();

import { getEmployee, postEmployee, putEmployee } from '../controllers/employeeController.js';

routeEmployee.get('/', getEmployee);
routeEmployee.post('/', postEmployee);
routeEmployee.put('/', putEmployee);

export default routeEmployee;
