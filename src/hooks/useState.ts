import { useRef } from 'react';

const useState = <T>(defaultValue: T) => {
  const value = useRef(defaultValue);

  const setValue = (newValue: T) => {
    if (typeof newValue === 'function') {
      value.current = newValue(value.current);
    } else {
      value.current = newValue;
    }
  };

  return [value, setValue];
};

export default useState;
