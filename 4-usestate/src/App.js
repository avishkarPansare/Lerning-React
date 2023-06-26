import React,{useState} from "react"
import logo from './logo.svg';
import './App.css';


function App() {
  const [count, setCount] = useState(0)
  const [newCount, setNewCount] = useState(0)

  return (
    <div className="App">
      <header>
        <h1> Counter app using State/Hooks</h1>
      </header>
      <button onClick={()=> setCount(0)} className="Button"> Rest Counter</button>
      <button onClick={()=> setCount(count + 1)} className="Button">Counter Increase</button>
      <button onClick={()=> setCount(count - 1)} className="Button">Counter Decrease</button>
      <h1> Counter Value {count}</h1>
      <br></br>
      <br></br>
      <h1>New Counter</h1>
      <button onClick={()=> setNewCount(0)} className="Button"> Rest Counter</button>
      <button onClick={()=> (newCount >= 10 ? "" : setNewCount(newCount+1))} className="Button">Counter Increase</button>
      <button onClick={()=> (newCount <= 0 ? "" : setNewCount(newCount -1))} className="Button">Counter Decrease</button>
      <h1> New Counter Value {newCount}</h1> 
    </div>
  );
}

export default App;
