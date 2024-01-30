const { Request, Response } = "express";
const { ObjectId } = require("mongodb");
const userModel = require("../models/usermodels");
const jwt =require('jsonwebtoken');
const AuthToken = require('../models/Authguard');
// const findOneAndUpdate = require('../models/Authguard');

require('dotenv').config();

const loginService = {
  async signinService(userData,res) {
    try {
      const { email, password } = userData;
      const query = {
        email: email
      }
      const user = await userModel.findOneUser(query);
      if(!user){
        return null;
      }
      console.log("user", user);
      if (password === user.password) {
       const token = await jwt.sign({userId: user._id}, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

       const response ={
       'message':  'login successful',
       'token':token
     }

     const query = {
      email : email,
      token : token
     }
    
     console.log("email", query);
     const authTokenRecord =await AuthToken.findOneAndUpdate(query);
      return (authTokenRecord);
      } 
      else {
        return "Login Failed";
      }
    } catch (error) {
        return error
    }
  },
};

module.exports = loginService;
