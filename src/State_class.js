

import React ,{Component}  from 'react';
import { useState } from 'react';

// import logo from './logo.svg';
import './App.css';
// import User from './User';
// import UserClass from './UserClass';

class App extends Component
{

    constructor()
    {
        super();
        this.state= {
            // data:"State data"
            data:1

        }
    }

     updateData() {
      this.setState(
        {
          data:this.state.data+1
        })   
    } 

    render()
    {
        return (

            <div className="App">
            <h1>{this.state.data}</h1>
            <button onClick={()=>this.updateData()}>Update Data</button>
            </div>
    
        );
    }
   
}

export default App;