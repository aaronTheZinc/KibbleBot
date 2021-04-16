
import './App.css';
import './index.css'
import Main from './components/UI/Main/Main'
import {AppState} from './components/State/Provider'
function App() {
  return (
    <div className="App">
      <AppState>
      <Main/>
      </AppState>
    
    </div>
  );
}

export default App;
