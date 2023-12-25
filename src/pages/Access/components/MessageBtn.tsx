import useCountDown from '@/hooks/useCountDown';
import { Button } from 'antd';

const MessageBtn = () => {
  const { start, count } = useCountDown(3, {
    onEnd: (count: number) => {
      console.log(count, 'cont');
    },
    countDownCallback: (count: number) => {
      console.log(count, 'count');
    },
  });

  const message = count ? `${count}s 后重试` : '点击获取验证码';
  const disabled = !!count;

  const handleClick = () => {
    start();
  };

  return (
    <div>
      <Button disabled={disabled} onClick={handleClick}>
        {message}
      </Button>
    </div>
  );
};

export default MessageBtn;
