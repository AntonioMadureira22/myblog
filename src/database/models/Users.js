const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : { type: String, require: trusted, unique: true},
    email: { type: String, required: true, unique: true },
    password: {type: String, required: true},
});

// Hash password before saving the user
userSchema.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }
    next();
  });
  
const User = mongoose.model('User', userSchema);
module.exports = User;