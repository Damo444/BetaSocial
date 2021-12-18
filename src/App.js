import React, { Component } from 'react';
import './App.css';
import {data } from './data/data';

import Card from './components/Card';

const colorsToPick=[
  {
    label:'blue', 
    color:'#40BBFF',
  },
  {
    label:'green', 
    color:'#50E3C2',
  },
  {
    label:'pink', 
    color:'#DF70B5',
  },
  
  {
    label:'red',
    color:'#be2a45',
},
  {
    label:'yellow', 
    color:'#FEB102',
  }

]

class App extends Component {
  constructor(){
    super();
    this.state={
      title:'',
      description:'',
      selectedColor: 'blue',
    }
  }


  

  render(){
   
    
  return (   
    <div className="App">
      
      <h1> what </h1>

     

     

    </div>
  );
}
}





export default App;
