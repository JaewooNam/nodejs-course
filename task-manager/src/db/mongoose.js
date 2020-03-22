const mongoose = require('mongoose')

// create db
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})

// set up collection
const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})


const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

// const me = new User({
//     name: 'Andrew',
//     age: 31
// })

// // save to actual db
// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

const task = new Task({
    description: 'Learn the mongoose',
    completed: false
})

task.save().then(() => {
    console.log(task)
}).catch((err)=>{
    console.log(err)
})
