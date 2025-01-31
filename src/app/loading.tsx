import React from 'react';

const LoadingVideo: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-75"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-150"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
};

export default LoadingVideo;
