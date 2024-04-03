import { useState } from "react";


function App() {
  const [counter, setCounter] = useState(0)


  const handleIncrement = () => {
    setCounter(prevState => prevState + 1)
  }

  const handleDecrement = () => {
    setCounter(prevState => prevState - 1)
    setCounter(prevState => prevState - 1)
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={handleDecrement}>
        -
      </button>
      <p>{counter}</p>
      <button onClick={handleIncrement}>
        +
      </button>


    </div>
  );
}

export default App;
