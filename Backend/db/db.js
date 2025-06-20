const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config(); // Load .env file

const connectToDb = () => {
  mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ Connected to MongoDB');
  })
  .catch((err) => {
    console.error('❌ Error connecting to MongoDB:', err);
  });
};

module.exports = connectToDb;
