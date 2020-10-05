import React, { useEffect } from 'react';


export default function usePersistedState(key, defaultValue) {
  const [state, setState] = React.useState(() => JSON.parse(localStorage.getItem(key)) || (typeof defaultValue === 'function' ? defaultValue() : defaultValue));
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}