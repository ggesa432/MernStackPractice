const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/hobbyFetcherDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));

// Define Schemas and Models
const HobbySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  hobbies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hobby' }],
});

const Hobby = mongoose.model('Hobby', HobbySchema);
const User = mongoose.model('User', UserSchema);

// API Routes
// Add a new hobby
app.post('/api/hobbies', async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Hobby name is required" });

    const hobby = new Hobby({ name });
    await hobby.save();
    res.status(201).json(hobby);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//  Fetch all hobbies
app.get('/api/hobbies', async (req, res) => {
  try {
    const hobbies = await Hobby.find();
    res.json(hobbies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//  Fetch all users with their hobbies
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find().populate('hobbies');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user's hobbies
app.put('/api/users/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const { hobbies } = req.body; 

    let user = await User.findOne({ username });

    if (!user) {
      // If user does not exist, create a new one with the first hobby
      user = new User({ username, hobbies });
      await user.save();
      return res.json(user);
    }

    // Ensure the new hobby is not already in the user's hobby list
    const updatedHobbies = new Set([...user.hobbies.map(h => h.toString()), ...hobbies]);

    user.hobbies = Array.from(updatedHobbies); // Convert Set back to an array
    await user.save();
    
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
