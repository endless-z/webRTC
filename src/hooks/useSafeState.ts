import type { Dispatch, SetStateAction } from 'react';
import { useCallback, useState } from 'react';
import useUnmountedRef from './useUnmountedRef';

function useSafeState<T>(
  initialState: T | (() => T),
): [T, Dispatch<SetStateAction<T>>];

function useSafeState<T = undefined>(): [
  T | undefined,
  Dispatch<SetStateAction<T | undefined>>,
];

function useSafeState<T>(initialState?: T | (() => T)) {
  const unmountedRef: { current: boolean } = useUnmountedRef();
  const [state, setState] = useState(initialState);
  const setCurrentState = useCallback((currentState: any) => {
    if (unmountedRef.current) return;
    setState(currentState);
  }, []);

  return [state, setCurrentState] as const;
}

export default useSafeState;
