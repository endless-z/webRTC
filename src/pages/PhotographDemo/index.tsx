import { PageContainer } from '@ant-design/pro-components';
import { Button, Form, Image, Select } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useEffect, useRef, useState } from 'react';
import './index.less';

const PhotographDemo = () => {
  const videoEle = useRef<any>(null);
  const [form] = useForm();

  const [devicesList, setDevicesList] = useState<any>([]);
  const [imgList, setImgList] = useState<string[]>([]);
  const getLocalStream = async (constraints?: MediaStreamConstraints) => {
    // 获取媒体流
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    // 播放本地视频流
    (videoEle.current as any).srcObject = stream;
  };

  useEffect(() => {
    // 获取本地音视频流
    console.log(navigator.mediaDevices.getSupportedConstraints());

    // getLocalStream({
    //   audio: false,
    //   video: true,
    // });
  }, []);

  useEffect(() => {
    // 获取所有视频输入设备
    const getDevices = async () => {
      const devices = await navigator.mediaDevices.enumerateDevices();
      console.log(devices, '所有视频输入设备');
      const videoDevices = devices.filter(
        (device) => device.kind === 'videoinput',
      );
      setDevicesList(videoDevices);
      console.log(videoDevices, 'videoDevices');
    };
    getDevices();
  }, []);

  // 切换设备
  const handleDeviceChange = async (deviceId: string) => {
    // getLocalStream();
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        deviceId: { exact: deviceId },
      },
    });
    // 播放本地视频流
    (videoEle.current as any).srcObject = stream;
  };

  // 拍照
  const takePhoto = () => {
    const list = [];
    const videoEl = document.getElementById('localVideo') as HTMLVideoElement;
    const canvas = document.createElement('canvas');
    canvas.width = videoEl.videoWidth;
    canvas.height = videoEl.videoHeight;
    const ctx = canvas.getContext('2d')!;
    // ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
    // list.push(canvas.toDataURL('image/png'));
    // 添加滤镜
    const filterList = [
      'blur(5px)', // 模糊
      'brightness(0.5)', // 亮度
      'contrast(200%)', // 对比度
      'grayscale(100%)', // 灰度
      'hue-rotate(90deg)', // 色相旋转
      'invert(100%)', // 反色
      'opacity(90%)', // 透明度
      'saturate(200%)', // 饱和度
      'saturate(20%)', // 饱和度
      'sepia(100%)', // 褐色
      'drop-shadow(4px 4px 8px blue)', // 阴影
    ];
    for (let i = 0; i < filterList.length; i++) {
      ctx.filter = filterList[i];
      ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
      list.push(canvas.toDataURL('image/png'));
    }
    setImgList(list);
  };

  return (
    <PageContainer ghost>
      <Form form={form}>
        <Form.Item label="切换设备" name="devicesList">
          <Select
            style={{ width: '200px' }}
            options={devicesList}
            placeholder="请选择设备"
            onChange={handleDeviceChange}
            fieldNames={{ label: 'label', value: 'deviceId' }}
          />
        </Form.Item>
        <Form.Item label="切换设备" name="devicesList">
          <Button onClick={takePhoto}>拍照</Button>
        </Form.Item>
      </Form>
      <video id="localVideo" ref={videoEle} autoPlay playsInline muted></video>

      <div>
        {imgList.map((item: string) => {
          return <Image src={item} key="item" />;
        })}
      </div>
    </PageContainer>
  );
};

export default PhotographDemo;
