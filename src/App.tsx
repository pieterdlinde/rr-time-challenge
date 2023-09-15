import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
         R&R Time Challenge Template 😀
        </p>
        <b>{date.toUTCString()}</b>
      </header>
    </div>
  );
}

export default App;
