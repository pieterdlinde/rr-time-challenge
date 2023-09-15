import  { useEffect, useState } from 'react';
import './App.css';

function App() {
 
  const [date,setDate] = useState(new Date());
    
  useEffect(() => {
    const timer = setInterval(()=>setDate(new Date()), 1000 )
      return function cleanup() {
          clearInterval(timer)
      }
  
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          A Base RR Time Challenge Template
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        {date.toUTCString()}
        </a>
      </header>
    </div>
  );
}

export default App;
