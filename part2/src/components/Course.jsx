const Header = (props) => {
  return <h2>{props.course}</h2>
}

const Part = (props) => {
  return <p>{props.part} {props.exercises}</p>
}

const Content = (props) => {
  return props.parts.map(part =>
    <Part key={part.id} part={part.name} exercises={part.exercises} />
  )
}

const Total = (props) => {
  return (
    <b>
      Number of exercises {props.parts.reduce((sum, part) => sum + part.exercises, 0)}
    </b>
  )
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

export default Course
