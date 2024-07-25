//Another component 
const Hello = () => {
  return (
    <div>
      <p>Hello form another component</p>
    </div>
  )
}

const Propy = (props) => {
  return (
    <>
      <p>Hello form {props.name} component. I am {props.age} years old.</p>
    </>
  )
}


const App = () => {

  const now = new Date()
  const a = 100
  const b = 420
  console.log(now, a+b)
  const age = 5
  const name = "BigPropy"

  return (
    <div>
      <Hello/>
      <Propy name="Propy" age={age}/>
      <Propy name={name} age={5+10}/>
      <p>Hello world it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}

export default App