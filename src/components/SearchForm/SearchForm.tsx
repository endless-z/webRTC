import { Button, Col, Form, Input, Layout, Row, Select } from 'antd';
import React, { useEffect } from 'react';
interface Props {
  name: string;
  onSubmit: () => void;
  localDevice: any;
}

// 脚手架示例组件
const Guide: React.FC<Props> = (props) => {
  const { name } = props;
  const [form] = Form.useForm();

  useEffect(() => {
    if (props.localDevice.audioIn) {
      // form.setFieldValue({
      // });
      console.log(props.localDevice.audioIn, '11localDevice');
    }
  }, [props.localDevice.audioIn]);

  return (
    <div
      style={{ background: '#f7f8fa', padding: '10px', borderRadius: '4px' }}
    >
      <Layout>
        <Form form={form} layout="inline">
          <Row gutter={[16, 8]}>
            <Col>
              <Form.Item label="选择摄像头" name="videoIn">
                <Select
                  style={{ width: 200 }}
                  placeholder="摄像头"
                  options={props.localDevice.videoIn || []}
                />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="选择麦克风" name="audioIn">
                <Select
                  style={{ width: 200 }}
                  placeholder="麦克风"
                  options={props.localDevice.audioIn || []}
                />
              </Form.Item>
            </Col>

            <Col>
              <Form.Item label="选择听筒" name="audioOut">
                <Select
                  style={{ width: 200 }}
                  placeholder="听筒"
                  options={props.localDevice.audioOut || []}
                />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="分辨率Width" name="layout3">
                <Input placeholder="分辨率Width" />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="分辨率Height" name="layout4">
                <Input placeholder="分辨率Height" />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="PFS" name="layout5">
                <Input placeholder="PFS" />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item>
                <Button type="primary" onClick={() => props.onSubmit()}>
                  确定
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Layout>
    </div>
  );
};

export default Guide;
