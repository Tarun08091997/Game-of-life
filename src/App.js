import './App.css'
import Main from './Main';
import { AppState } from './context/AppStates';

function App() {
  return (
    <AppState>
      <Main />
    </AppState>
  );
}

export default App;
