import  React from 'react';
import './App.css';
import GoodBey from './components/GoodBey';
import Welcome from './components/Welcome';
import Addition from './components/Addition';


function App() {
  const  dawesome= "somthing"
  let aa=50
  let bb=50
  let  sum=aa+bb
  return (
    <div className="App">
     
        <p>
        Bresadds 
        
         <input type="submit"></input> 
        </p>
        <p>{dawesome}</p>
        {/* we  can calculate values and using JSX we can bring these values on the HTML file*/ }
        <p>What is the sum of 50 +  50 </p>
        <p>it is {sum}</p>

        <p>the Welcome component is bellow</p>
        <Welcome></Welcome>
        <GoodBey></GoodBey>
        <Addition></Addition>
      
     
    </div>
  );
}
export default App;
