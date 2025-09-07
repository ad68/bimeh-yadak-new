'use client';

import { useEffect, useRef } from 'react';

const Camera = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' }, // 'user' for selfie camera
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Error accessing camera:', err);
      }
    };

    startCamera();

    // Optionally stop camera on unmount
    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = (videoRef.current.srcObject).getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <video ref={videoRef} autoPlay playsInline style={{ width: '100%' }} />
  );
};

export default Camera;
