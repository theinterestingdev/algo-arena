const mongoose = require('mongoose');

const connectDB = () => mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/algo-arena', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

module.exports = connectDB;

