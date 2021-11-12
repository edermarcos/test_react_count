import PropTypes from 'prop-types';
import { useState } from 'react';

const CounterApp = ({ value }) => {
  const [count, setCount] = useState(value);
  const handleSubtract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>{ count }</h2>

      <button onClick={ () => setCount(count + 1) }>+1</button>
      <button onClick={ () => setCount(value) }>Reset</button>
      <button onClick={ handleSubtract }>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
};

CounterApp.defaultProps = {
  value: 0
};

export default CounterApp;
