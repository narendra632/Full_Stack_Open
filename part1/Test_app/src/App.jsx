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


// import { useState } from "react";

// const Display = ({counter}) => <div>{counter}</div>

// const Button = ({onClick,text}) => <button onClick={onClick}>{text}</button>

// const App = () => {
//   const [counter, setCounter] = useState(0)

//   const increaseByOne = () => setCounter(counter +1)
//   const decreaseByOne = () => setCounter(counter -1)
//   const setToZero = () => setCounter(0)


//   // setTimeout(
//   //   () => setCounter(counter + 1),
//   //   1000
//   // )

//   return (
//     <div>
//       <Display counter={counter}/>
//       <Button onClick={increaseByOne} text='plus'/>
//       <Button onClick={decreaseByOne} text='minus'/>
//       <Button onClick={setToZero} text='zero'/>
//     </div>

//   )
// }

// export default App

// import { useState } from "react";

// const History = (props) => {
//   if(props.allClicks.length === 0){
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({handleClick, text}) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>
// )

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)

//   const [allClicks, setAll] = useState([])

//   const [total, setTotal] = useState(0)


//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     const updatedLeft = left + 1
//     setLeft(updatedLeft)
//     setTotal(updatedLeft + right)  
//   }


//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     const updatedRight = right + 1
//     setRight(updatedRight)
//     setTotal(left + updatedRight)
//   }

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text='left'/>
//       <Button handleClick={handleRightClick} text='right'/>
//       {right}

//       <History allClicks={allClicks}/>
//       <p>total: {total}</p>
//     </div>
//   )
// }


import { useState } from "react";

const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(0)

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value}/>
      <Button handleClick={() => setToValue(value+1000)} text="thousand" />      
      <Button handleClick={() => setToValue(0)} text="reset" />      
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}

export default App