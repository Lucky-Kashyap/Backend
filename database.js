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

    // ==================== CREATE OPERATIONS ====================
    console.log('\n========== CREATE OPERATIONS ==========');

    // Insert a single document
    const newUser = {
        firstName: 'Rahul',
        lastName: 'Sharma',
        city: 'Delhi',
        work: 'Data Scientist'
    };
    const insertOneResult = await collection.insertOne(newUser);
    console.log('Inserted one document with ID:', insertOneResult.insertedId);

    // Insert multiple documents
    const documents = [
        {
            firstName: 'Priya',
            lastName: 'Patel',
            city: 'Mumbai',
            work: 'Web Developer'
        },
        {
            firstName: 'Amit',
            lastName: 'Kumar',
            city: 'Bangalore',
            work: 'DevOps Engineer'
        }
    ];
    const insertManyResult = await collection.insertMany(documents);
    console.log(`Inserted ${insertManyResult.insertedCount} documents`);
    console.log('Inserted IDs:', insertManyResult.insertedIds);

    // ==================== READ OPERATIONS ====================
    console.log('\n========== READ OPERATIONS ==========');

    // Find all documents
    const allUsers = await collection.find({}).toArray();
    console.log('All documents:', allUsers);

    // Find one document
    const oneUser = await collection.findOne({ firstName: 'Rahul' });
    console.log('Found one user:', oneUser);

    // Find documents with filter
    const filteredUsers = await collection.find({ city: 'Mumbai' }).toArray();
    console.log('Users from Mumbai:', filteredUsers);

    // Count documents
    const totalCount = await collection.countDocuments();
    console.log('Total documents:', totalCount);

    // ==================== UPDATE OPERATIONS ====================
    console.log('\n========== UPDATE OPERATIONS ==========');

    // Update one document
    const updateOneResult = await collection.updateOne(
        { firstName: 'Rahul' },
        { $set: { work: 'Senior Data Scientist', city: 'Gurgaon' } }
    );
    console.log(`Updated ${updateOneResult.modifiedCount} document(s)`);

    // Update many documents
    const updateManyResult = await collection.updateMany(
        { city: 'Mumbai' },
        { $set: { city: 'Pune' } }
    );
    console.log(`Updated ${updateManyResult.modifiedCount} document(s)`);

    // Verify updates
    const updatedUser = await collection.findOne({ firstName: 'Rahul' });
    console.log('Updated user:', updatedUser);

    // ==================== DELETE OPERATIONS ====================
    console.log('\n========== DELETE OPERATIONS ==========');

    // Delete one document
    const deleteOneResult = await collection.deleteOne({ firstName: 'Amit' });
    console.log(`Deleted ${deleteOneResult.deletedCount} document(s)`);

    // Delete many documents (be careful with this!)
    // const deleteManyResult = await collection.deleteMany({ city: 'Pune' });
    // console.log(`Deleted ${deleteManyResult.deletedCount} document(s)`);

    // Final count
    const finalCount = await collection.countDocuments();
    console.log('Final document count:', finalCount);

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

