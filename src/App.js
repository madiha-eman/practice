import logo from './logo.svg';
import './App.css';
import User from './components/User';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <div className="App">
  <User>
    <UserDetail/>
  </User>
    </div>
  );
}

export default App;
