// app.js
const express = require('express');
const mongoose = require('mongoose');
const wishlistRoutes = require('./routes/wishlistRoutes');  //adding at 9:06
const userRoutes = require('./routes/userRoutes');//adding at 9:06

require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/wishlist', require('./routes/wishlistRoutes'));

 
// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/yourdbname')
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Change the port if 3000 is in use
const PORT = process.env.PORT || 3001;  // Changed to 3001

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
