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
    // console.log(collection);

    // console.log(collection);

    //  const findResult = await collection.find({}).toArray();
    //  console.log('Found documents =>', findResult);

    // Log firstName and lastName for each document
    //  findResult.forEach((doc) => {
    //      console.log(`FirstName: ${doc.firstName}, LastName: ${doc.lastName}`);
    //  });
    // Insert 3 documents with different data
    // const documents = [
    //     {
    //         firstName: 'Rahul',
    //         lastName: 'Sharma',
    //         city: 'Delhi',
    //         work: 'Data Scientist'
    //     },
    //     {
    //         firstName: 'Priya',
    //         lastName: 'Patel',
    //         city: 'Mumbai',
    //         work: 'Web Developer'
    //     },
    //     {
    //         firstName: 'Amit',
    //         lastName: 'Kumar',
    //         city: 'Bangalore',
    //         work: 'DevOps Engineer'
    //     }
    // ];

    // const insertResult = await collection.insertMany(documents);
    // console.log('Inserted documents =>', insertResult.insertedIds);
    // console.log(`Successfully inserted ${insertResult.insertedCount} documents`);

    // const countResult = await collection.countDocuments();
    // console.log('Total documents =>', countResult);



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

