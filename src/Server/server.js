const express = require('express');
const mongoose = require('mongoose')
const app = express();
app.use(express.json());
console.log('first')
const DB_URI = 'mongodb://localhost:27017/defaultUserDB'; // Replace with your MongoDB URI
// mongoose.connect(DB_URI)
//     .then(() => console.log('MongoDB connected...'))
//     .catch(err => console.error('MongoDB connection error:', err));
// const userSchema = new mongoose.Schema({
//     username: { type: String, required: true, unique: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     role: { type: String, default: 'user' },
// }, { timestamps: true });
// const User = mongoose.model('User', userSchema);
app.get('/api/users/default', async (req, res) => {
    // try {
    //     const existingUser = await User.findOne({ username: 'defaultUser' });
    //     if (existingUser) {
    //         return res.status(400).json({ message: 'Default user already exists.' });
    //     }
    //     const hashedPassword = "asad1234";
    //     const defaultUser = new User({
    //         username: 'defaultUser',
    //         email: 'default@example.com',
    //         password: hashedPassword,
    //     });

    //     await defaultUser.save();
    //     res.status(201).json({ message: 'Default user created successfully.', user: defaultUser });
    // } catch (error) {
    //     console.error('Error creating default user:', error);
    //     res.status(500).json({ message: 'Internal server error.', error });
    // }

});

const startServer = (port = 5000) => {
    app.listen(port, () => console.log(`Express server running on port ${port}`));
};

module.exports = startServer;
