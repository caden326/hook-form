import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserForm from './components/registration';
// import Results from './components/results';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <h1>Log in</h1>
      <UserForm/>

      {/* <Results/> */}

      </header>
    </div>
  );
}

export default App;
