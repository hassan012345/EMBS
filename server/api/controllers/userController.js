import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body);
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await User.create({ name, email, password: hashedPassword });
        res.status(201).json({ user });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

export const signIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) return res.status(404).json({ message: "User doesn't exist" });
        const match = await bcrypt.compare(password, existingUser.password);
        if (!match) return res.status(400).json({ message: "Invalid credentials" });
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1m" });
        res.status(200).json({ user: existingUser, token });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

export default { signUp, signIn };