import { PageContainer } from '@ant-design/pro-components';
import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import VideoStream from './components/Video';

interface IUserInfo {
  userId: '';
  roomId: '';
}

export default () => {
  const [useInfo, setUserInfo] = useState<IUserInfo>({
    userId: '',
    roomId: '',
  });

  const [hasRegister, setHasRegister] = useState<boolean>(false);

  const handleClick = () => {
    setHasRegister(!!(useInfo.userId && useInfo.roomId));
  };

  const handleInput = (key: string, value: string) => {
    setUserInfo({ ...useInfo, [key]: value });
  };

  return (
    <PageContainer ghost>
      <Form layout="vertical">
        <Form.Item label="ID" name="我的ID">
          <Input
            onChange={(e) =>
              handleInput('userId', (e.target as HTMLInputElement).value)
            }
          />
        </Form.Item>
        <Form.Item label="房间ID" name="房间ID">
          <Input
            onChange={(e) =>
              handleInput('roomId', (e.target as HTMLInputElement).value)
            }
          />
        </Form.Item>
        <Form.Item>
          <Button onClick={handleClick} type="primary">
            斯达头！
          </Button>
        </Form.Item>
      </Form>
      <VideoStream />
    </PageContainer>
  );
};
