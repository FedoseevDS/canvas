import { useEffect, useRef } from 'react';

import { example1 } from 'examples/example';

import styles from './styles.module.css';

const App = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (ctx) {
      example1(ctx);
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
