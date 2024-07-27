import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Statistics = (props) => {
  if (props.setAll === 0) {
    return (
      <>
        No feedback given. Please click the buttons above & give us feedback.
      </>
    )
  }

  return (
    <>
      Good: {props.sGood} <br/>
      Neutral: {props.sNeutral} <br/>
      Bad: {props.sBad} <br/>
      All: {props.setAll} <br/>
      Average: {props.setAvg} <br/>
      Positive: {props.setPositive}%
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good+1)} text='good'/>
      <Button handleClick={() => setNeutral(neutral+1)} text='neutral'/>
      <Button handleClick={() => setBad(bad+1)} text='bad'/>

      <h1>statistics</h1>
        <Statistics 
          sGood={good}
          sNeutral={neutral}
          sBad={bad}
          setAll={(good+neutral+bad)}
          setAvg={(good-bad)/(good+neutral+bad)} 
          setPositive={(good/(good+neutral+bad))*100}
        />
    </div>
  )
}

export default App