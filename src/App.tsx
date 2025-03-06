import { useEffect, useRef } from 'react';

import styles from './styles.module.css';

const App = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (ctx) {
      ctx.fillStyle = 'gray';
      ctx.fillRect(0, 0, 100, 100);

      ctx.globalAlpha = 0.2;
      ctx.lineWidth = 10;
      ctx.strokeStyle = 'red';
      ctx.strokeRect(50, 50, 100, 100);

      ctx.strokeStyle = 'orange';
      ctx.lineJoin = 'round';
      ctx.strokeRect(200, 50, 100, 100);

      ctx.strokeStyle = 'green';
      ctx.lineJoin = 'bevel';
      ctx.strokeRect(350, 50, 100, 100);

      ctx.strokeStyle = 'green';
      ctx.lineJoin = 'miter';
      ctx.strokeRect(500, 50, 100, 100);
    }
  }, [canvasRef]);

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
