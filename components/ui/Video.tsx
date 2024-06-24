import React from 'react';

interface VideoProps {
  src: string;
  type: string;
  controls?: boolean;
}

const Video: React.FC<VideoProps> = ({ src, type, controls = true }) => {
  return (
    <video width="100%" controls={controls}>
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
