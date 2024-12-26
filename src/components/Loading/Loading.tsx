import React from 'react';
import { LoadingProps } from '../../models/LoadingProps';
import './Loading.css';
// We are also assinging the default values for the props
const Loading: React.FC<LoadingProps> = ({
    message = "Loading...",
    size = "40px",
    color = "blue",
}) => {
    return (
        <div className='outerLoading'>
      <div
        style={{
          width: size,
          height: size,
          border: `4px solid lightgray`,
          borderTop: `4px solid ${color}`,
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      ></div>
      <p>{message}</p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
    );
}

export default Loading;