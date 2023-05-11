import './App.css';
import Clarice from './Clarice';
import MyStuff from './MyStuff';
import Giny from './Giny';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Introduction</h1>
        <div>
          <h3>Tatiana Gurova</h3>
            <p>I like hiking.</p>
            <p>Because I love nature and outdoor activities.</p>
        </div>
        <Clarice />
        <MyStuff />
        <Giny />
      </header>
    </div>
  );
}

export default App;
