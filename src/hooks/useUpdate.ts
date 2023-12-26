import { useReducer } from 'react';

const useUpdate = () => {
  const [, update] = useReducer((num: number): number => num + 1, 0);
  return update;
};

export default useUpdate;
