

const Form = ({ addNum, newName, handleNameChange, newPhone, handlePhoneChange }) => {
  return (
    <form onSubmit={addNum}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        phone: <input value={newPhone} onChange={handlePhoneChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default Form