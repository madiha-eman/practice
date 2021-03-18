import logo from './logo.svg';
import './App.css';
import User from './components/User';
import UserDetail from './components/UserDetail';
import FetchApi from './components/quesTwo/FetchApi';
import AddTodo from './components/quesThree/AddTodo';

function App() {
  return (
    <div className="App">
      <h1>Answer: 1</h1>

  <User>
    <UserDetail/>
  </User>
<h1>Answer: 2</h1>
  <FetchApi/>
  <h1>Answer: 3</h1>
  <AddTodo/>
    </div>
  );
}

export default App;
