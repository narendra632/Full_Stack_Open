const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const Person = require('./models/person')

const app = express()



morgan.token('postData', function (response) {
  if (response.method === 'POST') {
    return JSON.stringify(response.body)
  } else {
    return null
  }
})

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:', request.path)
  console.log('Body:', request.body)
  console.log('---')
  next()
}


app.use(express.json())
app.use(cors())
app.use(express.static('dist'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :postData'))
app.use(requestLogger)


app.get('/info', (request, response, next) => {
    Person.find({})
        .then(persons => {
            response.send(
                `<p>Phonebook has info for ${persons.length} people</p>
                <p>${new Date()}</p>`
            )
        })
        .catch(error => next(error))
})


app.get('/api/persons', (request, response, next) => {
    Person.find({})
        .then(persons => {
            response.status(200).json(persons)
        })
        .catch(error => next(error))
})


app.get('/favicon.ico', (request, response) => {
    response.status(204).end()
})


app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id).then(person => {
        if(person) {
            response.status(200).json(person)
        } else {
            response.status(404).end()
        }
    })
    .catch(error => next(error))
})


app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndDelete(request.params.id)
        .then((person) => {
            if (!person) {
                response.status(404).send('not found')
            } else {
                response.status(204).send(`${person.name} has been deleted`)
            }
        })
        .catch(error => next(error))
})


// Add a new person
app.post('/api/persons', (request, response, next) => {
    const body = request.body

    if (body.name === undefined || body.number === undefined) {
        return response.status(400).json({
            error: 'name or number missing'
        })
    }
    const person = new Person({
        name: body.name,
        number: body.number,
    })
    person.save().then(savedPerson => {
        response.json(savedPerson)
    })
    .catch(error => next(error))
})


// Update a person
app.put('/api/persons/:id', (request, response, next) => {
    const { name, number } = request.body

    if(!name || !number) {
        const missing = !name ? 'name' : 'number'
        return response.status(400).json({ error: `${missing} is missing` })
    }

    Person.findByIdAndUpdate(
        request.params.id,
        { name, number },
        { new: true , runValidators: true, context: 'query' }
    )
        .then(updatedPerson => {
            response.status(200).json(updatedPerson)
        })
        .catch(error => next(error))
})


const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)


const errorHandler = (error, request, response, next) => {
    console.log('errorHandler',error.message)
    console.error(error.message)
    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }
    next(error)
}
app.use(errorHandler)


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})