require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const connectDb = require('../common-services/config/dbConnection');
const helmet = require('helmet');
const mongoose = require('mongoose');
const app = express();
const port = 8000;

connectDb().then(() => {
    
    // Security helmet
    app.use(helmet({
        frameguard: false,
    }));

    app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
    app.use(bodyParser.json({ limit: '20mb' }));

    app.use('*', (req, res) => res.status(404).json({
        code: 404,
        message: 'Invalid endpoint',
        error: true,
       
    }));
    const appListenCallBack = async() => {
        try {
            if (process.send && typeof process.send === 'function') { process.send('ready'); }
            console.log(`Server started on port ${port}`);
          } catch (error) {
            console.error(`Server started on port ${port} with error`);
          }
    }
    app.listen(port, appListenCallBack);
}).catch((err) => {
    console.error(err.message);
    console.error('Database error');
});

    // On Connection
mongoose.connection.on('connected', () => {
        console.log('Connected to database ');
      });
  
      // On Error
      mongoose.connection.on('error', (err) => {
        console.error(err.message);
        console.error('Database error');
});
