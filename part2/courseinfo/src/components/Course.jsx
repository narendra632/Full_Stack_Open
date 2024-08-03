import Header from './Header'

const Content = ({ parts }) => {
    return parts.map((part) => <Part key={part.id} part={part} />)
}

const Part = ({ part }) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    )
}

const Total = ({ parts}) => {
    const totalE = parts.reduce(
        (sum, part) => sum + part.exercises, 0
    )

    return <h3>total of exercises {totalE}</h3>
}


const Course = ({ course }) => {
    return (
        <div>
            <Header text={course.name} Ct='h2' />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course