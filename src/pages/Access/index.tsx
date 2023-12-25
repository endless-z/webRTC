import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess } from '@umijs/max';
import { Button } from 'antd';
import { useState } from 'react';
import MessageBtn from './components/MessageBtn';

const AccessPage: React.FC = () => {
  const [show, setShow] = useState(true);
  const access = useAccess();

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <PageContainer
      ghost
      header={{
        title: '权限示例',
      }}
    >
      <Access accessible={access.canSeeAdmin}>
        <Button>只有 Admin 可以看到这个按钮</Button>
      </Access>
      <div style={{ marginTop: '20px' }}>
        {show && <MessageBtn />}

        <Button onClick={handleClick}>卸载</Button>
      </div>
      {/* <Test /> */}
    </PageContainer>
  );
};

export default AccessPage;
