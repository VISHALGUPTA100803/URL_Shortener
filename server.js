require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); 
const authRoutes = require('./routes/auth'); 
const urlRoutes = require('./routes/url');

const app = express();


connectDB();


app.use(express.json());
app.use(cors());





app.use('/auth', authRoutes);
app.use('/', urlRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
