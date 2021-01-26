import React from 'react';
import '../styles/App.css';
import Card from './Card.js';

class App extends React.Component{
   render(){
       return(
         <div className="app">
            <Card />
         </div>
       );
   }
}

export default App;