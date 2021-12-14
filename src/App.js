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

  checkSelectedColor (color)  {
    this.setState({selectedColor:color})
  }

  updateTitle(title) {
    this.setState({title})

  }
    handleChange (event: any) {
    this.setState(event.target.value)
  }
  

  render(){
   
    
  return (   
    <div className="App">
      
      <div className="input-wrapper" >
           <input
             type= "text"
             placeholder="Title"
              onChange={handleChange}
          />
      </div>
      <textarea type="text" placeholder="description">
      </textarea>
      
      <div className="color-paragraph">
      <p className="color-paragraph">
        {
        colorsToPick.map((color,index)=>{
          const selectedClass =(this.state.selectedColor===color.label)
          ?'color-picker select' : 'color-picker';
          return (
            <a key={index} onClick= {() => this.checkSelectedColor(color.label)}>
            <span className={selectedClass} style={{backgroundColor:color.color}}>

            </span>
            </a>
          )
        })
      }

      </p>
      <button >Create New</button>
      </div>

      {
              data.map((node) => {
                return (
                  <Card key={node.date} node={node} color={node.color}/>
                  
                  

                )
              })
      }
       

     

     

    </div>
  );
}
}





export default App;
