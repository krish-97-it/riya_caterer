import React from 'react';

function Loading() {
  return (
    <div className="pendulum">
        <div className="pendulum_box">
            <div className="ball first"></div>
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball last"></div>
        </div>
    </div>
  );
}

export default Loading;