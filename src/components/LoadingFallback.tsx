
import React from 'react';

const LoadingFallback = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-dark text-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-vitally-purple mb-4"></div>
        <p className="text-vitally-purple">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingFallback;
