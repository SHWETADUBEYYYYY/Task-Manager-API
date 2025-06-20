console.log("✅ Running index.js");
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Task Routes
const taskRoutes = require('./routes/tasks');
app.use('/api/tasks', taskRoutes);

// ✅ Swagger setup (This must be after routes)
const swaggerDocs = require('./swagger');
swaggerDocs(app); // << THIS MUST BE CALLED!!

// Test route (to verify server works)
app.get('/test', (req, res) => {
  res.send('Server is working!');
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('📘 Swagger docs at http://localhost:5000/api-docs');
});