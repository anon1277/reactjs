import logo from './logo.svg';
import './App.css';
import User  from './User';
import UserClass from './UserClass';

function App() {

  let userName = "hack1277";
  function apple(){
    userName = "email";
    alert("Form is Submitted");
  }
  return (
    <div className="App">

      
      <User />

      <UserClass />
      <h1>{userName}</h1>
      <button onClick={apple}>Submit</button>
    </div>
  );
}

export default App;
