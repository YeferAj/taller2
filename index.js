import Server from './models/server.js' //Import model server

new Server() //Create an instance of Server class

/*
Ejercicio en el mismo proyecto de vehiculo crear la apirest(GET,POST,PUT) para:
El owner  con los siguientes atributos
name, phone y email
*/

/*
Crear un nuevo proyecto para una API REST que permita registrar 
los datos de un empleado. 
los datos son:
Numero Documento, Nombres, Fecha Ingreso, Fecha Retiro, Salario, 
DiasLaborados, Cesantias.

Los dias laborados deben ser calculados en la api.
Las Cesantias se calculan en el método POST y corresponden a la formula:
Salario * DiasLaborados / 360
Methodos: GET, POST, PUT
*/