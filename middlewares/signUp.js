const Users = require('../mongoose');
const User = require('../zod');
const bcrypt = require('bcrypt');

async function signUp(req, res) {
    const { name, email, password } = req.body;

    try {
        // Validate the response using the Zod schema
        User.parse(req.body);

        // Check if the user already exists
        const exist = await Users.findOne({ email });
        if (exist) {
            return res.status(400).json({ msg: "User Already Exist" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        await Users.create({
            name,
            email,
            password: hashedPassword,
            date: Date.now()
        });

        res.json({ msg: "Sign Up Successful" });
    } catch (e) {
        // Handle validation errors from Zod
        if (e.name === 'ZodError') {
            return res.status(400).json({ msg: e.errors.map(error => error.message).join(', ') });
        }

        // Handle other errors
        res.status(500).json({ msg: "Internal server error" });
    }
}

module.exports = signUp;
