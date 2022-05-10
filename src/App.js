
import './App.css';

function App() {
  const  dawesome= "klb"
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
        {/* we  can calculate values and using JSX we can bring these values on the HTML file*/}
        <p>What is the sum of 50 +  50 </p>
        <p>it is {sum}</p>
      
     
    </div>
  );
}
export default App;
