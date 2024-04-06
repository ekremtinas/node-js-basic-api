const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../model/user'); // Sequelize modelini düzgün şekilde import ettiğinizden emin olun
const moment = require('moment');
const SECRET_KEY = process.env.SECRET_KEY; // JWT için kullanılacak gizli anahtar

const register = async (req, res) => {
  try {
    const {
      Name,
      Email,
      Password,
      Phone,
      Language,
      Country,
      Address
    } = req.body;
    // Parola hashleme
   let hashedPassword= await bcrypt.hash(String(Password), 10);

    const newUser = await User.create({
      Name,
      Email,
      Password: hashedPassword,
      Phone,
      Language,
      Country,
      Address,
      IsAdmin:0,
      IsConfirm:true,
      IsActive:false,
      CreatedAt: moment().format(),
    });

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const login = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    const user = await User.findOne({ where: { Email ,IsActive:true } });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(Password, user.Password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({UserId:user.Id,AccountId:user.AccountId}, SECRET_KEY, { expiresIn: '30d' });

    res.status(200).json({ message: 'Login successful', token ,user});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { register, login };