import { Button, Col, Form, Input, Layout, Row, Select } from 'antd';
import React from 'react';
interface Props {
  name: string;
}

// 脚手架示例组件
const Guide: React.FC<Props> = (props) => {
  const { name } = props;
  const [form] = Form.useForm();

  return (
    <div
      style={{ background: '#f7f8fa', padding: '10px', borderRadius: '4px' }}
    >
      <Layout>
        <Form form={form} layout="inline">
          <Row gutter={[16, 8]}>
            <Col>
              <Form.Item label="选择摄像头" name="layout">
                <Select
                  defaultValue="lucy"
                  style={{ width: 120 }}
                  options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="选择麦克风">
                <Input placeholder="选择麦克风" />
              </Form.Item>
            </Col>

            <Col>
              <Form.Item label="选择听筒">
                <Input placeholder="选择听筒" />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="分辨率Width">
                <Input placeholder="分辨率Width" />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="分辨率Height">
                <Input placeholder="分辨率Height" />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="PFS">
                <Input placeholder="PFS" />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item>
                <Button type="primary">确定</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Layout>
    </div>
  );
};

export default Guide;
