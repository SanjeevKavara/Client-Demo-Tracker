const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
});


const User = mongoose.model('user', userSchema, 'user');

const findOneUser = async (query) => {
  try {
    const userData = await User.findOne(query);
    return userData;
  } catch (error) {
    console.error('Error finding user:', error);
    throw error; 
  }
};



module.exports = { User,findOneUser};
