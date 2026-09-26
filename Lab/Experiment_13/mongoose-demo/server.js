// server.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ================================
// STEP 1: CONNECT TO MONGODB
// ================================

const DB_URL = process.env.MONGO_URI;

mongoose.connect(DB_URL)
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch(err => console.error('MongoDB connection error:', err));