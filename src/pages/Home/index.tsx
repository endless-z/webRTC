import SearchForm from '@/components/SearchForm';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { useRef, useState } from 'react';
import { handleError } from './helper';
import styles from './index.less';
import { ILocalDevice } from './type';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  const localdeRef: any = useRef(null);

  const [localDevice, setLocalDevice] = useState<ILocalDevice>({
    audioIn: [],
    videoIn: [],
    audioOut: [],
  });

  const [formInline, setFormInline] = useState({
    videoId: '',
    audioInId: '',
    audioOutId: '',
    width: 1080,
    height: 720,
    frameRate: 24,
  });

  const onSuccess = (val: any) => {
    setLocalDevice(val);
  };

  // useEffect(() => {
  //   initInnerLocalDevice(onSuccess);
  // }, [initInnerLocalDevice]);

  const onSubmit = async () => {
    let stream = localdeRef.current.srcObject;
    if (stream) {
      stream.getAudioTracks().forEach((e: any) => {
        stream.removeTrack(e);
      });
      stream.getVideoTracks().forEach((e: any) => {
        stream.removeTrack(e);
      });
    }
    let newStream = await getTargetDeviceMedia(
      formInline?.videoId,
      formInline.audioInId,
    );
    localdeRef.current.srcObject = newStream;
    localdeRef.current.muted = true;
  };

  const getLocalUserMedia = async (constraints: any) => {
    return await navigator.mediaDevices.getUserMedia(constraints);
  };

  const getTargetDeviceMedia = async (videoId: string, audioId: string) => {
    const constraints = {
      audio: { deviceId: audioId ? { exact: audioId } : undefined },
      video: {
        deviceId: videoId ? { exact: videoId } : undefined,
        width: formInline.width,
        height: formInline.height,
        frameRate: { ideal: formInline.frameRate, max: 24 },
      },
    };
    if ((window as any).stream) {
      (window as any).stream.getTracks().forEach((track: any) => {
        track.stop();
      });
    }
    return await getLocalUserMedia(constraints).catch(handleError);
  };

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <SearchForm
          name={trim(name)}
          localDevice={localDevice}
          onSubmit={onSubmit}
        />
      </div>
      <div className={styles.videoContainer}>
        <video
          ref={localdeRef}
          style={{ width: '500px', height: '400px' }}
          autoPlay
          controls
          muted
        ></video>
      </div>
    </PageContainer>
  );
};

export default HomePage;
