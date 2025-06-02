require('dotenv').config(); // ✅ Add this line

const http = require('http');
const app = require('./app');  // Import the app instance from app.js
const port = process.env.PORT || 3000;  // Set default port to 3000 if not specified

const server = http.createServer(app);

// Listen on the specified port
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);  // ✅ Fix here
});
