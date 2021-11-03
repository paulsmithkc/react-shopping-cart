import { useState } from 'react';

function Input({ initialValue, ...rest }) {
  const [currentValue, setCurrentValue] = useState(initialValue || '');

  function handleChange(evt) {
    setCurrentValue(evt.currentTarget.value);
  }

  return (
    <input
      value={currentValue}
      onChange={(evt) => handleChange(evt)}
      {...rest}
    />
  );
}

export default Input;
