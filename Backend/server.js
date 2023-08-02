const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const chatRoutes = require('./routes/chatRoutes');
const cors = require("cors")

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB setup
mongoose.connect('mongodb://localhost:27017/chatbot', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use(cors())
app.use('/api/chat', chatRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
