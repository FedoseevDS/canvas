import { useEffect, useRef } from 'react';

import styles from './styles.module.css';

const App = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (ctx) {
      ctx.fillStyle = 'gray';
      ctx.fillRect(50, 50, 100, 100);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <canvas
          className={styles.canvas}
          height={750}
          ref={canvasRef}
          width={950}
        />
      </div>
    </div>
  );
};

export default App;
