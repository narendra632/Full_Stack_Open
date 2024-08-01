import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>;

const Anecdote = ({anecdote, vote }) => (
  <div>
    <div>{anecdote}</div>
    <div>has {vote} votes</div>
  </div>
)

const Button = ({text, onClick}) => {
  return <button onClick={onClick}>{text}</button>;
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
    'The best thing about a boolean is even if you are wrong, you are only off by a bit.',
    'The things is programming ain’t about what you know its about what you can figure out.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  const mostVotedIndex = points.indexOf(Math.max(...points));

  const handleNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () => {
    setPoints(points.map((ell, index) => (index === selected ? ell + 1 : ell)));
  };
  

  return (
    <>
      <Header text='Anecdote of the day'/>
      <Anecdote anecdote={anecdotes[selected]} vote={points[selected]}/>
      <br/>
      <Button text='Vote' onClick={handleVote}/>
      <Button text="Next Anecdote" onClick={handleNextAnecdote}/>
      <Header text='Anecdote with most votes'/>
      <Anecdote anecdote={anecdotes[mostVotedIndex]} vote={points[mostVotedIndex]}/>
    </>
  )
}

export default App