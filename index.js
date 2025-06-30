const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

// Init Middleware
// app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Set static folder for Content and Pages
app.use(express.static(path.join(__dirname, 'public')));

// Set Route for members API
app.use('/api/members', require('./routes/api/members'));

// Define Port to use for Server
const PORT = process.env.PORT || 5000;

// Start the Server
app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));

