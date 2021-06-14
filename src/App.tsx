import './App.css';
import AppFlavor from './flavors/Flavour';

function App() {
  return (
    <div className="App">
      <header className="App-header">{AppFlavor.getAppName()}</header>
    </div>
  );
}

export default App;
