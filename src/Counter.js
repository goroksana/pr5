import React from 'react';

function Counter(props) {
  return (
    <div className="counter">
      Current Count: {props.count}
    </div>
  );
}

export default Counter;
