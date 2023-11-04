const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');

exports.signup = async ( req, res)  => {
    try {

        const user = await User.create({...req.body});

       

        const token = jwt.sign({userId: user._id.toString()}, process.env.TOP_SECRET, { expiresIn: '1h'});

        const userdata = { _id: user._id, name: user.name ,  email: user.email}


        res.status(201).json({
            status: 'success',
            token,
            data: {
                userdata
            }
        })



    } catch (err) {
        res.status(400).json({err});
    }



}

exports.login = async (req, res) => {

    const { email, password } = req.body;

    if (  !email || !password ) {
        return res.status(400).json({ message: "Please provide a email and password"});

    }

    const user = await User.findOne({email}).select("+password")


    const password_match = (password === user.password);


    if(!user || !password_match){
        return res.status(401).json({message: "Incorrect email or password"})
    }

    const token = jwt.sign({ userId: user._id.toString() }, process.env.TOP_SECRET, {expiresIn: '1h'});

    const userdata = { _id: user._id, email: user.email,  name: user.name}

    res.status(200).json({ message : "login_success", token, data : { userdata }})



}