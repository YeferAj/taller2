import Owner from '../models/owner.js';

export async function getOwner(req, res) {
    try {
        const owners = await Owner.find();
        res.json({ owners });
    } catch (error) {
        res.status(500).json({ error });
    }
}

export async function postOwner(req, res) {
    const body = req.body;
    try {
        const owner = new Owner(body);
        await owner.save();
        res.status(201).json('Owner created successfully');
    } catch (error) {
        res.status(500).json(error);
    }
}

export async function putOwner(req, res) {
    const { id, name, phone, email } = req.body;
    try {
        await Owner.findByIdAndUpdate(id, { name, phone, email });
        res.status(200).json('Owner updated successfully');
    } catch (error) {
        res.status(500).json(error);
    }
}
