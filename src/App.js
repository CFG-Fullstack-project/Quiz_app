import './App.css';
import StartPage from './Pages/StartPage';
import JBcode from './JBcode.js';

function App() {
  
  return (
    <div className="App">
      <div className='Content'>
        <StartPage />
       <JBcode/> 
      </div>
    </div>
  );
}

export default App;

{/* I left in APP.js only the link to the component "questions" 
and  transferred all the mechanics in this component */}