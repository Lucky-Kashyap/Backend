const { MongoClient } = require('mongodb');

const URL = 'mongodb+srv://kashyapdivyanshu278_db_user:DaYrn8T0lCUzBk8R@namastelucky.zzum5gg.mongodb.net/';

const client = new MongoClient(URL);

const dbName = 'TestData';


async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('user');
    console.log(collection);
    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());




// Notes

// Go to mongodb website
// Create a free M0 cluster
// Create a user
// Get the connection string
// Install Mongo DB compass

