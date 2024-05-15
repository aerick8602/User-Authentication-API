const express = require('express');
const signUp = require('./middlewares/signUp');
const signIn = require('./middlewares/signIn');
const app = express();

app.use(express.json());

app.post('/signUp', signUp);
app.post('/signIn', signIn);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
