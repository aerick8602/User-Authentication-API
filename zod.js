const { z } = require('zod');

const User = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string()
        .min(8, "Password must be at least 8 characters long")
        .refine(value => /[A-Z]/.test(value) && /\d/.test(value), {
            message: "Password must contain at least one uppercase letter and one number"
        })
});

module.exports = User;
