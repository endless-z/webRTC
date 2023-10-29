import { ILocalDevice } from './type';

export const handleError = (error: { message: string; name: string }) => {
  alert('摄像头无法正常使用，请检查是否占用或缺失');
  console.error(
    'navigator.MediaDevices.getUserMedia error: ',
    error.message,
    error.name,
  );
};

export const initInnerLocalDevice = (
  onSuccess: (val: ILocalDevice) => void,
) => {
  const constraints = { video: true, audio: true };
  let localDevice: ILocalDevice = {
    audioIn: [],
    videoIn: [],
    audioOut: [],
  };
  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    console.log('浏览器不支持获取媒体设备');
    return;
  }
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (stream) {
      stream.getTracks().forEach((trick) => {
        trick.stop();
      });
      // List cameras and microphones.
      navigator.mediaDevices
        .enumerateDevices()
        .then(function (devices) {
          devices.forEach(function (device) {
            const obj = {
              value: device.deviceId,
              kind: device.kind,
              label: device.label,
            };
            if (device.kind === 'audioinput') {
              if (
                localDevice.audioIn.filter(
                  (e: any) => e.value === device.deviceId,
                ).length === 0
              ) {
                localDevice.audioIn.push(obj);
              }
            }
            if (device.kind === 'audiooutput') {
              if (
                localDevice.audioOut.filter(
                  (e: any) => e.id === device.deviceId,
                ).length === 0
              ) {
                localDevice.audioOut.push(obj);
              }
            } else if (device.kind === 'videoinput') {
              if (
                localDevice.videoIn.filter(
                  (e: any) => e.value === device.deviceId,
                ).length === 0
              ) {
                localDevice.videoIn.push(obj);
              }
            }
          });
          onSuccess(localDevice);
          return localDevice;
        })
        .catch(handleError);
    })
    .then(() => {
      console.log(localDevice, 'localDevice;');
    })
    .catch(handleError);
};
