const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url)

    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch(error => {
        console.log('error connecting to MongoDB:', error.message)
    })

const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: 3
    },
    number:{
        type: String,
        validate: {
            validator: function(v) {
                return /0[0-9]{1,2}-[0-9]{7,}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`,
        },
        required: [true, 'User phone number is required']
    }
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Person', personSchema)