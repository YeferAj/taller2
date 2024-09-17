import { model, Schema } from 'mongoose';

const ownerSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name should have at least 3 characters']
    },
    phone: {
        type: String,
        required: [true, 'Phone is required'],
        minlength: [10, 'Phone should have at least 10 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email must be unique'],
        minlength: [5, 'Email should have at least 5 characters']
    }
});

export default model('Owner', ownerSchema, 'owner');
