// Komponent Header wyświetla nazwę kursu
const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1> {/* Wyświetla nazwę kursu przekazaną w `props.course.name` */}
    </div>
  )
}

// Komponent Part wyświetla informacje o jednej części kursu
const Part = (props) => {
  console.log(props) // Wyświetla w konsoli właściwości przekazane do komponentu (pomocne w debugowaniu)
  return (
    <div>
      <p>{props.parts.name} {props.parts.exercises}</p> {/* Wyświetla nazwę części kursu i liczbę ćwiczeń */}
    </div>
  )
}

// Komponent Content wyświetla informacje o wszystkich częściach kursu
const Content = (props) => {
  console.log(props) // Wyświetla w konsoli właściwości przekazane do komponentu (pomocne w debugowaniu)
  return (
    <div>
      {/* Wywołuje komponent Part dla każdej części kursu */}
      <Part parts={props.parts[0]} />
      <Part parts={props.parts[1]} />
      <Part parts={props.parts[2]} />
    </div>
  )
}

// Komponent Total oblicza i wyświetla całkowitą liczbę ćwiczeń w kursie
const Total = (props) => {
  console.log(props) // Wyświetla w konsoli właściwości przekazane do komponentu (pomocne w debugowaniu)
  return (
    <div>
      {/* Oblicza sumę liczby ćwiczeń ze wszystkich części i wyświetla ją */}
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}

// Główny komponent aplikacji
const App = () => {
  // Obiekt reprezentujący kurs
  const course = {
    name: 'Half Stack application development', // Nazwa kursu
    parts: [ // Tablica części kursu, każda część zawiera nazwę i liczbę ćwiczeń
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      {/* Wywołuje komponent Header, przekazując do niego obiekt `course` */}
      <Header course={course} />
      {/* Wywołuje komponent Content, przekazując do niego tablicę `parts` z obiektu `course` */}
      <Content parts={course.parts}/>
      {/* Wywołuje komponent Total, przekazując do niego tablicę `parts` z obiektu `course` */}
      <Total parts={course.parts}/>
    </div>
  )
}

export default App // Eksportuje główny komponent `App` jako domyślny eksport
