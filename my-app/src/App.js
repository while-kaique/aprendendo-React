import './App.css';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa'

function App() {  
  const name = 'kaique'
  return (
    <div className="App">
      <h1>Eae cara</h1>
      <p>Seu nome é {name}, né?</p>
      <HelloWorld />
      <Pessoa idade='2' nome="João"/>
    </div>
  );
}

export default App;
