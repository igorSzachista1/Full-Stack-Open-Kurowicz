import { useState } from "react"; // Importuje hook `useState` z Reacta do zarządzania stanem

// Komponent Button renderuje przycisk z określoną akcją i tekstem
const Button = ({ handleClick, feedback }) => (
  <button onClick={handleClick}>{feedback}</button> /* Przycisk wywołuje `handleClick` i wyświetla tekst `feedback` */
);

// Komponent StatisticLine wyświetla pojedynczą statystykę w tabeli
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td> {/* Wyświetla nazwę statystyki (np. "good") */}
      <td>{value}</td> {/* Wyświetla wartość statystyki */}
    </tr>
  );
};

// Komponent Statistics wyświetla statystyki i oblicza średnią oraz procent pozytywnych opinii
const Statistics = ({ good, neutral, bad }) => {
  // Oblicza sumę opinii
  const all = good + neutral + bad;

  // Oblicza średnią (różnica dobrych i złych opinii podzielona przez liczbę wszystkich opinii)
  const average = ((good - bad) / all).toFixed(1);

  // Oblicza procent pozytywnych opinii
  const positive = ((good / all) * 100).toFixed(1);

  // Jeśli nie ma opinii, wyświetla odpowiedni komunikat
  if (all == 0) {
    return <p>No feedback given</p>; {/* Informuje, że brak jest opinii */}
  }

  // Renderuje statystyki w formie tabeli
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} /> {/* Wyświetla liczbę dobrych opinii */}
        <StatisticLine text="neutral" value={neutral} /> {/* Wyświetla liczbę neutralnych opinii */}
        <StatisticLine text="bad" value={bad} /> {/* Wyświetla liczbę złych opinii */}
        <StatisticLine text="all" value={all} /> {/* Wyświetla sumę wszystkich opinii */}
        <StatisticLine text="average" value={average} /> {/* Wyświetla średnią */}
        <StatisticLine text="positive" value={positive + " %"} /> {/* Wyświetla procent pozytywnych opinii */}
      </tbody>
    </table>
  );
};

// Główny komponent aplikacji
const App = () => {
  // Ustawia stan dla liczby dobrych, neutralnych i złych opinii
  const [good, setGood] = useState(0); // Liczba dobrych opinii
  const [neutral, setNeutral] = useState(0); // Liczba neutralnych opinii
  const [bad, setBad] = useState(0); // Liczba złych opinii

  // Funkcja zwiększająca liczbę dobrych opinii
  const addToGood = () => {
    setGood(good + 1); // Zwiększa wartość `good` o 1
  };

  // Funkcja zwiększająca liczbę neutralnych opinii
  const addToNeutral = () => {
    setNeutral(neutral + 1); // Zwiększa wartość `neutral` o 1
  };

  // Funkcja zwiększająca liczbę złych opinii
  const addToBad = () => {
    setBad(bad + 1); // Zwiększa wartość `bad` o 1
  };

  // Renderuje całą aplikację
  return (
    <>
      <h1>give feedback</h1> {/* Nagłówek sekcji dodawania opinii */}
      <Button handleClick={addToGood} feedback="good" /> {/* Przycisk dodający dobrą opinię */}
      <Button handleClick={addToNeutral} feedback="neutral" /> {/* Przycisk dodający neutralną opinię */}
      <Button handleClick={addToBad} feedback="bad" /> {/* Przycisk dodający złą opinię */}
      <h1>statistics</h1> {/* Nagłówek sekcji statystyk */}
      <Statistics good={good} neutral={neutral} bad={bad} /> {/* Wyświetla statystyki */}
    </>
  );
};

export default App; // Eksportuje główny komponent aplikacji
