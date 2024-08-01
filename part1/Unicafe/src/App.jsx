import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
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
    <table>
      <tbody>
        <StatisticLine text='Good' value={props.sGood} />
        <StatisticLine text='Neutral' value={props.sNeutral} />
        <StatisticLine text='Bad' value={props.sBad} />
        <StatisticLine text='All' value={props.setAll} />
        <StatisticLine text='Average: ' value={props.setAvg} />
        <StatisticLine text='Positive: ' value={props.setPositive + ' %'} />
      </tbody>
    </table>
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