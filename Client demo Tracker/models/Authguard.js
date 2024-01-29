const mongoose = require('mongoose');

const authTokenSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    created_by:{
        type:String,
        default:'SYSTEM'
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
    updated_by:{
        type:String,
        default:'SYSTEM'
    }
  // Add other fields as needed
  });
  
  const authToken = mongoose.model('authguard', authTokenSchema, 'authguard');

  async function findOneAndUpdate(query) {
    try {
      const AuthToken = authToken.findOneAndUpdate(
        { email: query?.email },
        { $set: {  token: query?.token, updated_at: Date.now() } },
        { upsert: true, new: true }
      );
       return AuthToken;
    } catch (error) {
      console.error('Error finding user:', error);
      throw error; 
    }
  };
  

  module.exports = {authToken,findOneAndUpdate};