import { PageContainer } from '@ant-design/pro-components';
import { Button, Col, Form, Input, Row } from 'antd';

export default () => {
  return (
    <PageContainer ghost>
      <Row>
        <Col span={6}>
          <div style={{ width: '100%', height: '400px' }}>
            <Button type="primary">通话</Button>
            <Button type="primary">切换</Button>
          </div>
        </Col>
        <Col span={18}>
          <div
            style={{
              width: '800px',
              height: '200px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Form>
              <Form.Item label="发送消息">
                <Input placeholder="消息"></Input>
              </Form.Item>
              <div>22</div>

              <Button type="primary">点击发送</Button>
            </Form>
          </div>
        </Col>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          <video id="localdemo01" autoPlay controls muted></video>
          <video
            id="remoteVideo01"
            autoPlay
            controls
            muted
            style={{ marginLeft: '100px' }}
          ></video>
        </div>
      </Row>
    </PageContainer>
  );
};
