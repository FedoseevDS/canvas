import { resetContext } from 'helpers/resetContext';
import { useEffect, useRef } from 'react';
import { Render } from 'types';

import styles from './styles.module.css';

type CanvasProps = {
  height?: number;
  onRender: Render;
  width?: number;
};

const Canvas = ({ height = 750, onRender, width = 950 }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (ctx && canvas) {
      const cleanup = onRender({ canvas, ctx, height, width });

      return () => {
        if (cleanup) {
          cleanup();
        }

        resetContext(ctx);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      };
    }
  }, [onRender, height, width]);

  return (
    <div className={styles.container}>
      <canvas
        className={styles.canvas}
        height={height}
        ref={canvasRef}
        width={width}
      />
    </div>
  );
};

export default Canvas;
