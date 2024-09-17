import Employee from '../models/employee.js';

export async function getEmployee(req, res) {
    try {
        const employees = await Employee.find();
        res.json({ employees });
    } catch (error) {
        res.status(500).json({ error });
    }
}

export async function postEmployee(req, res) {
    const body = req.body;
    try {
        const employee = new Employee(body);
        await employee.save();
        res.status(201).json('Employee created successfully');
    } catch (error) {
        res.status(500).json(error);
    }
}

export async function putEmployee(req, res) {
    const { id, documentNumber, names, dateOfEntry, dateOfExit, salary } = req.body;
    try {
        const employee = await Employee.findById(id);
        if (employee) {
            employee.documentNumber = documentNumber;
            employee.names = names;
            employee.dateOfEntry = dateOfEntry;
            employee.dateOfExit = dateOfExit;
            employee.salary = salary;
            await employee.save();
            res.status(200).json('Employee updated successfully');
        } else {
            res.status(404).json('Employee not found');
        }
    } catch (error) {
        res.status(500).json(error);
    }
}
