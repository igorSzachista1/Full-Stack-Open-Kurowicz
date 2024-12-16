import { useState } from 'react' // Importuje hook `useState` z React do zarządzania stanem

// Komponent wyświetlający tytuł
const Title = (props) => {
  return (
    <div>
      <h1>{props.text}</h1> {/* Wyświetla tekst tytułu przekazany jako `props.text` */}
    </div>
  )
}

// Komponent wyświetlający anegdotę i liczbę głosów
const Anecdotes = (props) => {
  return(
    <div>
      <div>{props.anecdotes}</div> {/* Wyświetla tekst anegdoty */}
      <div>has {props.votes} votes</div> {/* Wyświetla liczbę głosów */}
    </div>
  )
}

// Komponent przycisku z obsługą zdarzeń
const Button = (props) => {
  return (
  <div>
    <button onClick={props.handleClick}>{props.text}</button> {/* Przycisk z akcją z `props.handleClick` */}
  </div>
  )
}

// Komponent wyświetlający anegdotę z największą liczbą głosów
const MostVotes = (props) => {
  return (
    <div>
      <div>{props.anecdotes}</div> {/* Wyświetla anegdotę */}
      <div>has {props.max} votes</div> {/* Wyświetla liczbę głosów */}
    </div>
  )
}

// Główny komponent aplikacji
const App = () => {
  // Tablica przechowująca wszystkie anegdoty
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  // Zmienna stanu przechowująca indeks aktualnie wyświetlanej anegdoty
  const [selected, setSelected] = useState(0)

  // Zmienna stanu przechowująca liczbę głosów dla każdej anegdoty (wszystkie wartości początkowo to 0)
  const [voted, setVoted] = useState(Array(anecdotes.length).fill(0))

  // Funkcja losująca nową anegdotę
  const nextClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length)) // Ustawia nowy losowy indeks w stanie `selected`
  }

  // Funkcja zwiększająca liczbę głosów dla aktualnej anegdoty
  const voteClick = () => {
    const newVotes = [...voted] // Tworzy kopię tablicy głosów
    newVotes[selected] += 1 // Zwiększa liczbę głosów dla aktualnej anegdoty
    setVoted(newVotes) // Aktualizuje stan
  }

  // Oblicza największą liczbę głosów w tablicy
  const max = Math.max(...voted)

  // Znajduje indeks anegdoty z największą liczbą głosów
  const index = voted.indexOf(max)

  // Wyświetla aplikację
  return (
    <div>
      <Title text='Anecdote of the day'/> {/* Tytuł sekcji */}
      <Anecdotes anecdotes={anecdotes[selected]} votes={voted[selected]}/> {/* Wyświetla aktualną anegdotę i jej głosy */}
      <Button handleClick={nextClick} text='next anecdote'/> {/* Przycisk do losowania kolejnej anegdoty */}
      <Button handleClick={voteClick} text='vote'/> {/* Przycisk do głosowania */}
      <Title text='Anecdote with most votes'/> {/* Tytuł sekcji */}
      <MostVotes anecdotes={anecdotes[index]} max={max} /> {/* Wyświetla anegdotę z największą liczbą głosów */}
    </div>
  )
}

export default App; // Eksportuje główny komponent `App` jako domyślny eksport
