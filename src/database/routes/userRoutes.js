const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const bcrypt = require('bcryptjs');
const { generateToken, verifyToken } = require('../utils/jwt');

//The Signup route
router.post('/signup', async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        return res.status(400).json({ message: 'Email already in use' });
      }
  
      const newUser = new User({ username, email, password });
      await newUser.save();
  
      const token = generateToken(newUser);
      res.status(201).json({ token, user: { username, email } });
    } catch (err) {
      res.status(500).json({ message: 'Error creating user' });
    }
  });

  // Login route
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      const token = generateToken(user);
      res.json({ token, user: { username: user.username, email: user.email } });
    } catch (err) {
      res.status(500).json({ message: 'Error logging in' });
    }
  });
  
  module.exports = router;