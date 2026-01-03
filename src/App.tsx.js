import React, { useEffect, useState } from 'react';
import './styles/global.css';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 2秒後にローディングを解除
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      {isLoading ? (
        <div className="loading-screen">
          <p>Loading...</p>
        </div>
      ) : (
        <ResponsiveFrame>
          <Root />
        </ResponsiveFrame>
      )}
    </div>
  );
};

export default App;
