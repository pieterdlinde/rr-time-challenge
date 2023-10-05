import './App.css';
import Counter from './components/Counter';
import Clock from './components/Clock';

function App() {
  return (
    <div className="App">
      <Counter />
      <Clock />
      <iframe name="globe" src="https://lottie.host/?file=4f2887e5-e0b4-4748-a4d1-82e5900831cf/CMmKzKUQyw.json"></iframe>
    </div>
  );
}

export default App;
