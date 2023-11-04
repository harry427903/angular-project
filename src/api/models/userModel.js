const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type :String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String, 
        required: [true, 'Please enter a password'],
        minlength: 8,
        select: false,
    }

});

const User = mongoose.model('User', userSchema);

module.exports = User;
