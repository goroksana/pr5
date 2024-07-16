import React, { useState } from 'react';
import './App.css';
import Button from './Button';
import Counter from './Counter';

function App() {
  const [count, setCount] = useState(0);

  const handleButtonClick = (increment) => {
    setCount(count + increment);
  };

  return (
    <div className="App">
      <Counter count={count} />
      <Button increment={10} onClick={handleButtonClick} />
      <Button increment={-100} onClick={handleButtonClick} />
      <Button increment={25} onClick={handleButtonClick} />
    </div>
  );
}

export default App;

