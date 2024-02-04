// import mongoose from "mongoose";
const mongoose = require('mongoose');
const AppConstants = require('../utils/constant');


const appConstant = AppConstants;

require('dotenv').config();

mongoose.set('debug', true);


const connectToDB = async () => {
  try {
    await mongoose.connect(`${process.env.DEV_DB_CONNECTION}`, {
      dbName: `${process.env.DEV_DB}`
      // Other options...
    });
    const db = mongoose.connection;
    db.on('error', (error) => {
        console.log(appConstant.ERROR, error);
    });
    db.on('reconnected', () => {
        console.log(appConstant.RECONNECTED);
    });
    db.on('disconnected', () => {
        console.log(appConstant.DISCONNECTED);
    });
    return db;
  } catch (error) {
        console.log(appConstant.ERROR, error);
        throw error;
  }
};

module.exports = connectToDB;

// export default connectToDB;