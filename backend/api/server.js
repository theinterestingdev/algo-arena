require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const connectDB = require('./db/db');
const app = express();

connectDB();

app.use(cors());
app.use(express.json());




app.use('/api/auth', authRoutes);


app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
