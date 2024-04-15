require('dotenv').config(); 
const cloudinary = require('cloudinary').v2;
module.exports = {
    server: {
      // Configuration for the server
      PORT: process.env.PORT || 3000,
      DefaultViewEngine:'jade' ,// Define the port number for your server
    },
    database: {
      // Configuration for the database
      uri: process.env.MONGO_URI, // URI for connecting to your MongoDB database
      options: {
        timestamps: true, // Enable automatic timestamps (createdAt and updatedAt)
        versionKey: false, // Disable version key (e.g., __v)
        useNewUrlParser: true, // Use the new URL parser for MongoDB
      },
    },
    color: {
      // Define color codes for console output
      green: "\x1b[32m", // Green color
      red: "\x1b[31m", // Red color
    },
    notFoundTemplate: 404, // A template or value for "not found" responses
    jwtSecretKey: process.env.SECRETKEY || 'testsecret', // Secret key for JWT authentication
  };
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });