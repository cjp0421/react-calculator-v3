import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  const [input, setInput] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = 0;
    setInput(0);
  };

  function resetResult(e) {
    e.preventDefault();
    setResult((prevVal) => prevVal * 0);

  };

  return (
    <div className="App container">
      <div className='row'>
        <div className='col'>
          <h1 className="header">Simplest Working Calculator</h1>
        </div>

      </div>
      <div className='row'>
        <form>
          <p ref={resultRef}> {result} </p>
          <p ref={inputRef}>{input} </p>
          <input
            pattern="[0-9]"
            ref={inputRef}
            type="number"
            placeholder="Type a number"
          />
          <button onClick={(input) => {
            input.preventDefault();
            setInput(input = Number(inputRef.current.value))
          }}>Set starting input</button><br />
          <div className='buttons'>
            <button onClick={plus}>add</button>
            <button onClick={minus}>subtract</button>
            <button onClick={times}>multiply</button>
            <button onClick={divide}>divide</button>
            <button onClick={resetResult}>Reset Result</button>
            <button onClick={resetInput}>Reset Input</button>
          </div>
        </form>
      </div>
    </div>

  );
}

export default App;
