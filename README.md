# User Authentication API

This is a simple Node.js/Express application provides user authentication functionalities including sign-up and sign-in. It uses MongoDB for database storage and bcrypt for password hashing.

## Features

- User Sign-Up
- User Sign-In
- Password Hashing for Security
- Input Validation using Zod

## Technologies Used

- Node.js
- Express
- MongoDB (Mongoose)
- bcrypt
- Zod

## Installation

1. **Install dependencies:**

    ```sh
    npm install express mongoose zod bcrypt
    ```

2. **Set up MongoDB:**

    Make sure you have a MongoDB database set up. You can use MongoDB Atlas for a cloud database. Replace the MongoDB connection string in `mongoose.js` with your own connection string:

    ```javascript
    mongoose.connect('your-mongodb-connection-string', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    ```

## Usage

1. **Start the server:**

    ```sh
    node express.js
    ```

2. **Endpoints:**

    - **Sign-Up:**
        - URL: `/signUp`
        - Method: `POST`
        - Body: 
            ```json
            {
                "name": "Your Name",
                "email": "your.email@example.com",
                "password": "YourPassword123"
            }
            ```
        - Response:
            - Success: `{ "msg": "Sign Up Successful" }`
            - User Already Exists: `{ "msg": "User Already Exist" }`
            - Validation Error: `{ "msg": "Password must contain at least one uppercase letter and one number" }`

    - **Sign-In:**
        - URL: `/signIn`
        - Method: `POST`
        - Body:
            ```json
            {
                "email": "your.email@example.com",
                "password": "YourPassword123"
            }
            ```
        - Response:
            - Success: `{ "msg": "Signing in successfully" }`
            - Wrong Password: `{ "msg": "Wrong password" }`
            - User Not Found: `{ "msg": "User not found" }`


## Dependencies
```sh
{
    "bcrypt": "^5.1.1",
    "express": "^4.19.2",
    "mongoose": "^8.3.4",
    "zod": "^3.23.8"
    
}
```
