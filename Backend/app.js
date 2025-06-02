const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');

dotenv.config();  // ✅ Add this line to load environment variables
const app = express();

// Connect to DB
connectToDb();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/users', userRoutes);

module.exports = app;  // This exports the app instance to be used in server.js
