// CRUD Operation


// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    // get specific db
    const db = client.db(databaseName)

    db.collection('users').updateOne({
        _id: new ObjectID("")
    }, {
        $set: {
            name: 'Mike'
        }
    }).then((result) => {

    }).catch((error) => {

    })


    db.collection('tasks').deleteOne({
        description: "Clean the house"
    }).then(() => {
        
    }).catch(() => {
        
    })



    // db.collection('users').findOne({ _id: new ObjectID("5e75cfc78ce5e937f35692d8") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 32 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 32 }).count((error, count) => {
    //     console.log(count)
    // })

    // async
    // db.collection('users').insertOne({
    //     name: 'Vikram',
    //     age: 22
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops) // output of inserted data
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28,
    //     }, {
    //         name: 'Paul',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },
    //     {
    //         description: 'Renew inspection',
    //         completed: false
    //     }
    //     ,{
    //         description: 'Pot plants',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert')
    //     }
    // })

})
