import { Schema, model } from 'mongoose';
import moment from 'moment';

const employeeSchema = new Schema({
    documentNumber: {
        type: String,
        required: [true, 'Document Number is required'],
        unique: true
    },
    names: {
        type: String,
        required: [true, 'Names are required']
    },
    dateOfEntry: {
        type: Date,
        required: [true, 'Date of Entry is required']
    },
    dateOfExit: {
        type: Date
    },
    salary: {
        type: Number,
        required: [true, 'Salary is required']
    },
    daysWorked: {
        type: Number
    },
    severance: {
        type: Number
    }
});

employeeSchema.pre('save', function(next) {
    if (this.dateOfEntry && this.dateOfExit) {
        this.daysWorked = moment(this.dateOfExit).diff(moment(this.dateOfEntry), 'days');
        this.severance = (this.salary * this.daysWorked) / 360;
    }
    next();
});

export default model('Employee', employeeSchema);
