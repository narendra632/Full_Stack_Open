// //Another component 
// const Hello = ({name, age}) => {
  
//   const bornYear = () => new Date().getFullYear() - age
//   return (
//     <div>
//       <p>Hello {name}, you are {age} years old.</p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const Propy = (props) => {
//   return (
//     <>
//       <p>Hello form {props.name} component. I am {props.age} years old.</p>
//     </>
//   )
// }

// const App = (props) => {

//   const now = new Date()
//   const age = 5
//   const name = "Peter"

//   const {counter} = props

//   return (
//     <div>
//       <Hello name="Maya" age={26 +10}/>
//       <Propy name={name} age={age}/>
//       <p>Hello world it is {now.toString()}</p>

//       <p>{counter}</p>
//     </div>
//   )
// }

// export default App


import { useState } from "react";

const Display = ({counter}) => <div>{counter}</div>


const Button = ({onClick,text}) => <button onClick={onClick}>{text}</button>


const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter +1)
  const decreaseByOne = () => setCounter(counter -1)
  const setToZero = () => setCounter(0)


  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={increaseByOne} text='plus'/>
      <Button onClick={decreaseByOne} text='minus'/>
      <Button onClick={setToZero} text='zero'/>
    </div>

  )
}

export default App