const mongoose = require('mongoose');
const connectDb = () =>  {
    return mongoose.connect(
        process.env.kDatabasePath, {
            dbName: process.env.kDatabaseName,
            maxPoolSize: 20,
        });
}

module.exports = connectDb;