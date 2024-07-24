import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
import UserClass from './UserClass';

import React ,{Component}  from 'react';

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

// import React ,{Component}  from 'react';
// import { useState } from 'react';

// // import logo from './logo.svg';
// import './App.css';
// // import User from './User';
// // import UserClass from './UserClass';

// class App extends Component
// {

//     constructor()
//     {
//         super();
//         this.state= {
//             // data:"State data"
//             data:1

//         }
//     }

//      updateData() {
//       this.setState(
//         {
//           data:this.state.data+1
//         })   
//     } 

//     render()
//     {
//         return (

//             <div className="App">
//             <h1>{this.state.data}</h1>
//             <button onClick={()=>this.updateData()}>Update Data</button>
//             </div>
    
//         );
//     }
   
// }

// export default App;