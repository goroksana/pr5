import React from 'react';

function Button(props) {
  const handleClick = () => {
    props.onClick(props.increment);
  };

  return (
    <button onClick={handleClick}>
      {props.increment > 0 ? `+${props.increment}` : props.increment}
    </button>
  );
}

export default Button;
