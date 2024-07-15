import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
import UserClass from './UserClass';

function App() {
  // State variable to manage data
  const [data, setData] = useState("hack");

  // Regular variable to hold username
  let userName = "hack1277";

  // Function to handle button click
  function apple() {
    // Update regular variable (userName)
    userName = "email";

    // Update state variable (data)
    setData("hack1277");

    // Alert user
    alert("Form is Submitted");
  }

  return (
    <div className="App">
      {/* Render User component */}
      <User />

      {/* Render UserClass component */}
      <UserClass />

      {/* Display state variable (data) */}
      <h1>{data}</h1> {/* value will update due to state */}

      {/* Display regular variable (userName) */}
      <h1>{userName}</h1> {/* value will not update */}

      {/* Button to trigger the apple function */}
      <button onClick={apple}>Submit</button>
    </div>
  );
}

export default App;
