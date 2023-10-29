import { Outlet } from '@umijs/max';
import { Layout } from 'antd';

export default function BaseLayout() {
  return (
    <Layout style={{ background: '#fff', height: '100vh' }}>
      <Outlet />
    </Layout>
  );
}
