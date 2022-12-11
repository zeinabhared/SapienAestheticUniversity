const { Schema, model } = require('mongoose');

const creatorSchema = new Schema({
  creatorname: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Must match an email address!'],
  },
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'user',
  }],
  
},
{
  toJSON: {
    virtuals: true,
  },
  id: false,
}
);

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
}

// Create a virtual property `friendCount` that gets the amount of friends per post
creatorSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const Creator = model('creator', creatorSchema);

module.exports = Creator;