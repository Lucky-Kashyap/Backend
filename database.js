const { MongoClient } = require('mongodb');

const URL = 'mongodb+srv://kashyapdivyanshu278_db_user:DaYrn8T0lCUzBk8R@namastelucky.zzum5gg.mongodb.net/';

const client = new MongoClient(URL);

// Connect to MongoDB
async function connectDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client;
    }
    catch (error) {
        console.log('Error connecting to MongoDB:', error);
        throw error;
    }
}

// Get database instance (replace 'your_database_name' with your actual database name)
function getDB(dbName = 'kashyapdivyanshu278_db_user') {
    return client.db(dbName);
}

// Close the connection
async function closeConnection() {
    try {
        await client.close();
        console.log('MongoDB connection closed');
    }
    catch (error) {
        console.log('Error closing connection:', error);
    }
}

// Export functions for use in other files
module.exports = {
    connectDB,
    getDB,
    closeConnection,
    client
};
if (require.main === module) {
    connectDB()
        .then(() => {
            console.log('Database connection successful!');
        })
        .catch((error) => {
            console.error('Failed to connect:', error);
            process.exit(1);
        });
}

// Notes

// Go to mongodb website
// Create a free M0 cluster
// Create a user
// Get the connection string
// Install Mongo DB compass

