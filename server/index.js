const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const route = express.Router();
const UserModel = require('./models/user'); // Ensure the model exists and has correct fields

const app = express();

// Middleware for JSON parsing and CORS
app.use(express.json());
app.use(cors({
  origin: '*',
}));

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/crud", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("MongoDB connection error:", error));

// Fetch single user by ID
app.get('/getUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findById(id)
    .then(user => res.json(user))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Update user by ID
app.put('/updateUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(id, { name: req.body.name, email: req.body.email, age: req.body.age }, { new: true })
    .then(user => res.json(user))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Delete user by ID
app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete(id)
    .then(() => res.json({ message: "User deleted successfully" }))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Fetch all users
route.get('/', (req, res) => {
  UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Create a new user
route.post('/users', (req, res) => {
  UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Apply the routes to the app
app.use("/api", route);

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
