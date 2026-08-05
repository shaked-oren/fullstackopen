const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

const Course = (props) => {
  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p key={props.id}>{props.part} {props.exercises}</p>
}

const Content = (props) => {
  return props.parts.map(part => {
    return <Part part={part.name} exercises={part.exercises} key={part.id}/>
  })
}
const Total = (props) => {
  return <p>Number of exercises {props.parts.reduce((sum, part) => sum + part.exercises, 0)}</p>
}

export default App