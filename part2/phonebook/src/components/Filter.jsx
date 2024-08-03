

const Filter = ({ filter, onFilterC }) => {
  return (
    <div>
      filter shown with <input value={filter} onChange={onFilterC} />
    </div>
  )
}

export default Filter