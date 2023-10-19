const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


exports.register = async (req, res) => {
  try {
    
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });

    
    await user.save();

    
    const token = jwt.sign({ userId: user._id }, 'your-secret-key');

    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json({ error: 'User registration failed' });
  }
};


exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ error: 'Incorrect password' });
  }

  const token = jwt.sign({ userId: user._id }, 'your-secret-key');

  res.json({ user, token });
};
