import { useCallback, useEffect, useRef, useState } from 'react';

type Props = {
  onEnd: (count: number) => void;
  countDownCallback: (count: number) => void;
};

const useCountDown = (
  initCount: number,
  { onEnd, countDownCallback }: Props,
) => {
  const [count, setCount] = useState(0);
  let timer = useRef<any>(null);
  let countDowning = useRef<boolean>(false);

  useEffect(() => {
    // timer.current && clearInterval(timer.current);
    console.log('卸载');
    return () => {
      timer.current && clearInterval(timer.current);
      countDowning.current = false;
    };
  }, []);

  useEffect(() => {
    if (countDowning.current && count !== initCount) {
      countDownCallback(count);
      if (count === 0) {
        onEnd(count);
        countDowning.current = false;
      }
    }
  }, [count, initCount]);

  const start = useCallback(() => {
    countDowning.current = true;
    setCount(initCount);
    timer.current = setInterval(() => {
      setCount((pre: number) => {
        if (pre === 1) {
          timer.current && clearInterval(timer.current);
        }
        return pre - 1;
      });
    }, 1000);
  }, [initCount]);

  return {
    start,
    count,
  };
};

export default useCountDown;
