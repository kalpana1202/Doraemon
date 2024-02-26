import React from 'react';
import First from './components/first';
import './App.css'
import Quiz from './quiz/quiz';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      startTest: true
    }
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(){
    this.setState({
      startTest: false
    })

  }
  render() {
    return (
      <div className='App'>
        {
          this.state.startTest ?
        (<div className='First'>
          <First clickevent={this.handleClick}/>
        </div>):
        (<div className='Quiz'>
          <Quiz/>
           
        </div>)
       }
  

        
      </div>
    
        
       
    );
  }
}

export default App;