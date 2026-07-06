import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter((prev) => Math.min(20, prev + 1));
  };

  const removeValue = () => {
    setCounter((prev) => Math.max(0, prev - 1));
  };

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>
        Add Value
      </button>

      <br />
      <br />

      <button onClick={removeValue}>
        Remove Value
      </button>
    </>
  );
}

export default App;