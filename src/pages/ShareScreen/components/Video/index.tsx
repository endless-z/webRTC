import { useEffect, useRef } from 'react';

const VideoStream = () => {
  const myVideoRef = useRef<HTMLVideoElement>(null);
  const myVideoStream = useRef<MediaStream | null>(null);

  const init = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    myVideoStream.current = stream;
    (myVideoRef.current as any).srcObject = myVideoStream.current!;
  };

  useEffect(() => {
    // init();
  }, []);

  return <video ref={myVideoRef} width="300" height="300" autoPlay muted />;
};

export default VideoStream;
