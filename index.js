const express = require('express')
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json());

//cors for frontend integration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.use('/api', userRoutes)

// app.use('*', (req, res) => {
//   res.status(404).json({ error: 'Route not found' });
// });


const startServer = async () => {
 try {
    await connectDB()
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (error) {
    console.error('Server startup error:', error)
    process.exit(1)
  }
};

startServer()


