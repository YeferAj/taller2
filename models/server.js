// models/server.js
import express from 'express';
import 'dotenv/config';
import dbConnection from '../database/config.js';
import { createUser } from '../controllers/userController.js';
import routesVehicle from '../routes/vehicleRoute.js';
import routeLogin from '../routes/loginRoute.js';
import routeOwner from '../routes/ownerRoute.js';
import routeEmployee from '../routes/employeeRoute.js';

export default class Server {
    constructor() {
        this.app = express();
        this.listen();
        this.dbConnect();
        this.pathVehicle = '/api/vehicle';
        this.pathOwner = '/api/owner'; 
        this.pathEmployee = '/api/employees'; 
        this.route();
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Server is running in PORT ${process.env.PORT}`);
        });
    }

    async dbConnect() {
        await dbConnection();
    }

    route() {
        this.app.use(express.json());
        this.app.use(this.pathVehicle, routesVehicle);
        this.app.use('/api/login', routeLogin);
        this.app.use(this.pathOwner, routeOwner);
        this.app.use(this.pathEmployee, routeEmployee); 
        this.app.post('/user', createUser);
    }
}
