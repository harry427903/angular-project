const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const { async } = require('rxjs');
const User = require('./models/userModel');


const app = express();

app.use(cors());
app.use(bodyparser.json());


const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');

app.use("/", userRouter);
app.use('/auth', authRouter);





module.exports = app;