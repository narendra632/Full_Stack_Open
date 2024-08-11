import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState({ type: null, content: null })

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  },[])

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (persons.find(person => person.name.toLowerCase() === newName.toLowerCase())) {

      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const person = persons.find(p => p.name.toLowerCase() === newName.toLowerCase())
        const changedPerson = { ...person, number: newPhone }

        personService
          .updateNumber(person.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id !== person.id ? p : returnedPerson))
            setMessage({ type: 'success', content: `Updated ${newName}` })
            clearNotification()
          })
      }
    }
    else {
      const nameObject = {
        name: newName,
        number: newPhone
      }
      personService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setMessage({ type: 'success', content: `Added ${newName}` })
          clearNotification()
        })
    }
    setNewName('')
    setNewPhone('')
  }

  const handleDelete = (id) => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .pdelete(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))

          setMessage({ type: 'success', content: `Deleted ${person.name}` })
          clearNotification()
        })
        .catch(error => {
          setMessage({ type: 'error', content: `Information of ${person.name} has already been removed from server` })
          clearNotification()
        })
    }
  }

  const clearNotification = () => {
    setTimeout(() => {
      setMessage({ type: null, content: null })
    }, 5000)
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={message} />

      <Filter filter={newFilter} onFilterC={handleFilterChange} />

      <h2>Add a new</h2>
      
      <Form 
        addNum={handleSubmit} 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newPhone={newPhone} 
        handlePhoneChange={handlePhoneChange} 
      />

      <h2>Numbers</h2>
      {filteredPersons.map(person => 
        <div key={person.name}>{person.name}-{person.number} <button onClick={() => handleDelete(person.id)}>delete</button></div> 
      )}
    </div>
  )
}

export default App