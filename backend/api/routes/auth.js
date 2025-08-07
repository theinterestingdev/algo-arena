const express = require('express');
const router = express.Router();
const User = require('../models/User');
const auth = require('../middleware/auth');


router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const user = new User({
            username,
            email,
            password
        });

        await user.save();
        const token = user.generateAuthToken();

        res.status(201).json({ user, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findByCredentials(email, password);
        const token = user.generateAuthToken();
        
        res.json({ user, token });
    } catch (error) {
        res.status(400).json({ error: 'Invalid credentials' });
    }
});


router.get('/me', auth, async (req, res) => {
    res.json(req.user);
});

module.exports = router;
